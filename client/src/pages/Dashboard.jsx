import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart3, Briefcase, FileText, FolderOpen, Settings, LogOut, X, Plus, Loader2, CheckCircle, RefreshCw, Users, TrendingUp, Trash2, Code2, UserPlus, Pencil } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import AdminNavbar from "../components/AdminNavbar";
import { getMeApi, logoutApi, getAllUsersApi, deleteUserApi, createDeveloperApi } from "../api/authApi";
import { getJobApplicationsApi, getProjectRequestsApi, getJobPostingsApi, createJobPostingApi, updateApplicationStatusApi, updateProjectReqStatusApi, deleteProjectRequestApi } from "../api/dashboard";
import { updateJobApi, deleteJobApi } from "../api/jobpost";
import { deleteApplicationApi, getResumeUrl } from "../api/jobApplications";
import { updateProjectStatusApi } from "../api/projectApi";
import { getAllBlogsApi, createBlogApi, updateBlogApi, deleteBlogApi } from "../api/blogApi";
import { BookOpen, Image as ImageIcon } from "lucide-react";

// ── Helpers ───────────────────────────────────────────────────────────────────
const statusColor = { PENDING: "bg-yellow-100 text-yellow-700", APPROVED: "bg-green-100 text-green-700", REJECTED: "bg-red-100 text-red-700" };

const thisMonth = (list) => {
  const now = new Date();
  return list.filter(a => {
    const d = new Date(a.created_at);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;
};
const countStatus = (list, s) => list.filter(a => (a.status || "PENDING") === s).length;
const getLast7Days = (items, key = "Value") =>
  Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const label = d.toLocaleDateString("en-US", { weekday: "short" });
    const str = d.toISOString().split("T")[0];
    return { day: label, [key]: items.filter(a => (a.created_at || "").startsWith(str)).length };
  });
const getStatusPie = (list) => {
  const p = countStatus(list, "PENDING"), a = countStatus(list, "APPROVED"), r = countStatus(list, "REJECTED");
  return [...(p ? [{ name: "Pending", value: p }] : []), ...(a ? [{ name: "Approved", value: a }] : []), ...(r ? [{ name: "Rejected", value: r }] : [])];
};
const PIE_COLORS = ["#f59e0b", "#10b981", "#ef4444"];
const PIE_COLORS2 = ["#8b5cf6", "#06b6d4", "#f43f5e"];

// ── Mini Stat (colored box) ───────────────────────────────────────────────────
const MiniStat = ({ label, value, sub, color }) => (
  <div className={`rounded-xl px-4 py-3 flex flex-col gap-0.5 ${color}`}>
    <span className="text-2xl font-extrabold">{value}</span>
    <span className="text-xs font-semibold opacity-80">{label}</span>
    {sub && <span className="text-xs opacity-60">{sub}</span>}
  </div>
);

// ── Big Stat Card ─────────────────────────────────────────────────────────────
const StatCard = ({ label, value, icon: Icon, color, bg, badge, badgeColor }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition">
    <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center flex-shrink-0`}>
      <Icon size={26} className={color} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-3xl font-extrabold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-0.5 truncate">{label}</p>
    </div>
    {badge != null && (
      <div className={`text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap ${badgeColor}`}>+{badge} <span className="font-normal">this month</span></div>
    )}
  </div>
);

// ── INSIGHTS ─────────────────────────────────────────────────────────────────
const InsightsSection = ({ applications, jobs, requests }) => {
  const appBarData = getLast7Days(applications, "Applications");
  const projBarData = getLast7Days(requests, "Projects");
  const appPieData = getStatusPie(applications);
  const projPieData = getStatusPie(requests);
  const pendingProj = countStatus(requests, "PENDING");
  const approvedProj = countStatus(requests, "APPROVED");
  const rejectedProj = countStatus(requests, "REJECTED");
  const pendingApp = countStatus(applications, "PENDING");
  const approvedApp = countStatus(applications, "APPROVED");
  const rejectedApp = countStatus(applications, "REJECTED");
  const monthApp = thisMonth(applications);
  const monthProj = thisMonth(requests);
  const convRate = applications.length > 0 ? Math.round((approvedApp / applications.length) * 100) : 0;
  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Insights Overview</h2>
          <p className="text-sm text-gray-500 mt-0.5">Real-time analytics across all modules</p>
        </div>
        <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1.5 rounded-full border border-blue-100">Live Data</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Total Job Applications" value={applications.length} icon={FileText} color="text-blue-600" bg="bg-blue-50" badge={monthApp} badgeColor="bg-blue-50 text-blue-600 border border-blue-100" />
        <StatCard label="Jobs Posted" value={jobs.length} icon={Briefcase} color="text-violet-600" bg="bg-violet-50" badge={null} />
        <StatCard label="Total Project Requests" value={requests.length} icon={FolderOpen} color="text-emerald-600" bg="bg-emerald-50" badge={monthProj} badgeColor="bg-emerald-50 text-emerald-700 border border-emerald-100" />
        <StatCard label="Approval Rate (Apps)" value={`${convRate}%`} icon={TrendingUp} color="text-amber-600" bg="bg-amber-50" badge={null} />
      </div>

      {/* Status Mini Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"><FolderOpen size={15} className="text-emerald-500" /> Project Requests — Status</p>
          <div className="grid grid-cols-3 gap-3">
            <MiniStat label="Pending" value={pendingProj} color="bg-amber-50 text-amber-700" sub="Awaiting" />
            <MiniStat label="Approved" value={approvedProj} color="bg-green-50 text-green-700" sub="Accepted" />
            <MiniStat label="Rejected" value={rejectedProj} color="bg-red-50 text-red-600" sub="Declined" />
          </div>
          <p className="mt-3 text-xs text-gray-400"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1"></span>This month: <strong className="text-gray-700">{monthProj} new</strong></p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"><FileText size={15} className="text-blue-500" /> Job Applications — Status</p>
          <div className="grid grid-cols-3 gap-3">
            <MiniStat label="Pending" value={pendingApp} color="bg-amber-50 text-amber-700" sub="Under review" />
            <MiniStat label="Approved" value={approvedApp} color="bg-green-50 text-green-700" sub="Shortlisted" />
            <MiniStat label="Rejected" value={rejectedApp} color="bg-red-50 text-red-600" sub="Not selected" />
          </div>
          <p className="mt-3 text-xs text-gray-400"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block mr-1"></span>This month: <strong className="text-gray-700">{monthApp} new</strong></p>
        </div>
      </div>

      {/* Bar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Project Requests — Last 7 Days</h3>
            <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg font-medium border border-emerald-100">Daily</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={projBarData} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} allowDecimals={false} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }} />
              <Bar dataKey="Projects" fill="#10b981" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Job Applications — Last 7 Days</h3>
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-medium border border-blue-100">Daily</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={appBarData} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} allowDecimals={false} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }} />
              <Bar dataKey="Applications" fill="#0076d8" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Project Status Distribution</h3>
          {projPieData.length > 0 ? (
            <ResponsiveContainer width="100%" height={230}>
              <PieChart>
                <Pie data={projPieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
                  {projPieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % 3]} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }} />
                <Legend iconType="circle" iconSize={10} />
              </PieChart>
            </ResponsiveContainer>
          ) : <p className="text-gray-400 text-center pt-16 text-sm">No project data yet</p>}
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Application Status Distribution</h3>
          {appPieData.length > 0 ? (
            <ResponsiveContainer width="100%" height={230}>
              <PieChart>
                <Pie data={appPieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
                  {appPieData.map((_, i) => <Cell key={i} fill={PIE_COLORS2[i % 3]} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }} />
                <Legend iconType="circle" iconSize={10} />
              </PieChart>
            </ResponsiveContainer>
          ) : <p className="text-gray-400 text-center pt-16 text-sm">No application data yet</p>}
        </div>
      </div>

      {/* Activity Summary */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><BarChart3 size={16} className="text-gray-500" /> Activity Summary</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Total Projects", value: requests.length, color: "text-emerald-600" },
            { label: "Projects This Month", value: monthProj, color: "text-emerald-500" },
            { label: "Pending Projects", value: pendingProj, color: "text-amber-600" },
            { label: "Total Applications", value: applications.length, color: "text-blue-600" },
            { label: "Apps This Month", value: monthApp, color: "text-blue-500" },
            { label: "Jobs Posted", value: jobs.length, color: "text-violet-600" },
          ].map(({ label, value, color }) => (
            <div key={label} className="text-center p-3 rounded-xl bg-gray-50 border border-gray-100">
              <p className={`text-2xl font-extrabold ${color}`}>{value}</p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── CREATE JOB ───────────────────────────────────────────────────────────────
const BLANK_FORM = { title: "", company: "Hously Finntech Realty", type: "Internship", location: "", locationType: "remote", description: "", salary: "Negotiable", aboutCompany: "", responsibilities: "", requirements: "", gains: "" };

const CreateJobSection = ({ jobs, onRefresh }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editJob, setEditJob] = useState(null);   // job object to edit
  const [confirmId, setConfirmId] = useState(null);   // id to delete
  const [confirmTitle, setConfirmTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(BLANK_FORM);

  const openCreate = () => { setEditJob(null); setForm(BLANK_FORM); setError(""); setSuccess(false); setModalOpen(true); };
  const openEdit = (j) => {
    setEditJob(j);
    setForm({
      title: j.title || "", company: j.company || "Hously Finntech Realty",
      type: j.type || "Internship", location: j.location || "",
      locationType: j.locationType || "remote", description: j.description || "",
      salary: j.salary || "Negotiable", aboutCompany: j.aboutCompany || "",
      responsibilities: Array.isArray(j.responsibilities) ? j.responsibilities.join("\n") : (j.responsibilities || ""),
      requirements: Array.isArray(j.requirements) ? j.requirements.join("\n") : (j.requirements || ""),
      gains: Array.isArray(j.gains) ? j.gains.join("\n") : (j.gains || ""),
    });
    setError(""); setSuccess(false); setModalOpen(true);
  };
  const closeModal = () => { setModalOpen(false); setEditJob(null); };

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setError("");
    try {
      const payload = { ...form, responsibilities: form.responsibilities.split("\n").filter(Boolean), requirements: form.requirements.split("\n").filter(Boolean), gains: form.gains.split("\n").filter(Boolean) };
      if (editJob) { await updateJobApi(editJob.id, payload); }
      else { await createJobPostingApi(payload); }
      setSuccess(true); onRefresh();
      setTimeout(() => { setSuccess(false); closeModal(); setForm(BLANK_FORM); }, 1500);
    } catch (err) { setError(err.response?.data?.message || "Failed to save job."); }
    finally { setLoading(false); }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try { await deleteJobApi(confirmId); onRefresh(); setConfirmId(null); }
    catch (e) { console.error(e); }
    finally { setDeleting(false); }
  };

  const inp = "w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0076d8] focus:border-transparent outline-none text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
        <button onClick={openCreate} className="flex items-center gap-2 bg-[#0076d8] hover:bg-[#0066c0] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-md">
          <Plus size={18} /> Create Job
        </button>
      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {jobs.length === 0 ? (
          <div className="text-center py-16 text-gray-400"><Briefcase size={40} className="mx-auto mb-3 opacity-40" /><p>No jobs posted yet</p></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>{["Title", "Type", "Location", "Salary", "Posted", "Actions"].map(h => <th key={h} className="text-left px-5 py-3 font-semibold text-gray-600 whitespace-nowrap">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jobs.map((j, i) => (
                  <tr key={j.id || i} className="hover:bg-gray-50 transition">
                    <td className="px-5 py-4 font-semibold text-gray-900">{j.title}</td>
                    <td className="px-5 py-4"><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{j.type}</span></td>
                    <td className="px-5 py-4 text-gray-600">{j.location}</td>
                    <td className="px-5 py-4 text-gray-600">{j.salary || "Negotiable"}</td>
                    <td className="px-5 py-4 text-gray-500">{j.posted_date || j.postedDate || "—"}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(j)} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold text-xs transition">
                          <Pencil size={13} /> Edit
                        </button>
                        <button onClick={() => { setConfirmId(j.id); setConfirmTitle(j.title); }} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs transition">
                          <Trash2 size={13} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {confirmId && (
        <>
          <div onClick={() => setConfirmId(null)} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-5 text-white flex items-center justify-between">
                <div><h3 className="text-lg font-bold">Delete Job</h3><p className="text-white/70 text-xs mt-0.5">This cannot be undone</p></div>
                <button onClick={() => setConfirmId(null)} className="p-2 rounded-full bg-white/15 hover:bg-white/25"><X size={17} /></button>
              </div>
              <div className="px-6 py-6 space-y-4">
                <p className="text-gray-700 text-sm text-center">Are you sure you want to delete <span className="font-bold">{confirmTitle}</span>?</p>
                <div className="flex gap-3">
                  <button onClick={() => setConfirmId(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50">Cancel</button>
                  <button onClick={handleDelete} disabled={deleting} className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60">
                    {deleting ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />} Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Create / Edit Modal */}
      {modalOpen && (
        <>
          <div onClick={closeModal} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-8 overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto">
              <div className="bg-gradient-to-r from-[#0c1e4a] to-[#0076d8] px-8 py-5 text-white flex items-center justify-between">
                <div><h3 className="text-xl font-bold">{editJob ? "Edit Job Posting" : "Create Job Posting"}</h3><p className="text-white/70 text-sm">Fill in the details below</p></div>
                <button onClick={closeModal} className="p-2 rounded-full bg-white/15 hover:bg-white/25"><X size={18} /></button>
              </div>
              <div className="px-8 py-6 max-h-[75vh] overflow-y-auto">
                {success ? (
                  <div className="flex flex-col items-center py-10"><div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3"><CheckCircle size={36} className="text-green-500" /></div><p className="font-bold text-gray-900">{editJob ? "Job Updated!" : "Job Created!"}</p></div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Job Title *</label><input required name="title" value={form.title} onChange={handleChange} placeholder="e.g. React Developer" className={inp} /></div>
                      <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Company</label><input name="company" value={form.company} onChange={handleChange} className={inp} /></div>
                      <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Type</label>
                        <select name="type" value={form.type} onChange={handleChange} className={inp + " bg-white"}><option>Internship</option><option>Full-time</option><option>Part-time</option></select></div>
                      <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Location *</label><input required name="location" value={form.location} onChange={handleChange} placeholder="e.g. Pune / Remote" className={inp} /></div>
                      <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Location Type</label>
                        <select name="locationType" value={form.locationType} onChange={handleChange} className={inp + " bg-white"}><option value="remote">Remote</option><option value="hybrid">Hybrid</option><option value="onsite">Onsite</option></select></div>
                      <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Salary</label><input name="salary" value={form.salary} onChange={handleChange} placeholder="Negotiable" className={inp} /></div>
                    </div>
                    <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Description *</label><textarea required name="description" value={form.description} onChange={handleChange} rows={3} className={inp + " resize-none"} /></div>
                    <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">About Company</label><textarea name="aboutCompany" value={form.aboutCompany} onChange={handleChange} rows={2} className={inp + " resize-none"} /></div>
                    <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Responsibilities (one per line)</label><textarea name="responsibilities" value={form.responsibilities} onChange={handleChange} rows={3} className={inp + " resize-none"} /></div>
                    <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Requirements (one per line)</label><textarea name="requirements" value={form.requirements} onChange={handleChange} rows={3} className={inp + " resize-none"} /></div>
                    <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">What You'll Gain (one per line)</label><textarea name="gains" value={form.gains} onChange={handleChange} rows={2} className={inp + " resize-none"} /></div>
                    <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#0076d8] to-[#0c1e4a] text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60">
                      {loading ? <><Loader2 size={18} className="animate-spin" />{editJob ? "Updating..." : "Creating..."}</> : (editJob ? "Update Job" : "Create Job Posting")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


const ApplicationsSection = ({ applications, onRefresh }) => {
  const [search, setSearch] = useState("");
  const [viewApp, setViewApp] = useState(null);
  const [confirmId, setConfirmId] = useState(null);
  const [confirmName, setConfirmName] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(null);
  const [statusPop, setStatusPop] = useState(null); // { id, current }
  const [newStatus, setNewStatus] = useState("");

  const filtered = applications.filter(a =>
    (a.full_name || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async () => {
    setDeleting(true);
    try { await deleteApplicationApi(confirmId); onRefresh(); setConfirmId(null); }
    catch (e) { console.error(e); }
    finally { setDeleting(false); }
  };

  const handleStatusUpdate = async () => {
    setUpdating(statusPop.id);
    try { await updateApplicationStatusApi(statusPop.id, newStatus); onRefresh(); setStatusPop(null); }
    catch (e) { console.error(e); }
    finally { setUpdating(null); }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-gray-900">Job Applications <span className="ml-2 text-base font-normal text-gray-400">({applications.length})</span></h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name..." className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#0076d8] w-56" />
            <span className="absolute left-3 top-2.5 text-gray-400"><svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></span>
            {search && <button onClick={() => setSearch("")} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-700"><X size={14} /></button>}
          </div>
          <button onClick={onRefresh} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800"><RefreshCw size={15} />Refresh</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400"><FileText size={40} className="mx-auto mb-3 opacity-40" /><p>{search ? `No results for "${search}"` : "No applications yet"}</p></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>{["Name", "Email", "Phone", "Experience", "College", "Status", "View", "Actions"].map(h => <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map(a => (
                  <tr key={a.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{a.full_name}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-[160px] truncate">{a.email}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{a.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{a.experience || "—"}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-[140px] truncate">{a.college_name || "—"}</td>
                    <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor[a.status] || "bg-gray-100 text-gray-600"}`}>{a.status}</span></td>
                    <td className="px-4 py-3">
                      <button onClick={() => setViewApp(a)} className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-semibold text-xs">View</button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => { setStatusPop({ id: a.id, current: a.status }); setNewStatus(a.status); }} className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-600 font-semibold text-xs flex items-center gap-1"><RefreshCw size={11} />Status</button>
                        <button onClick={() => { setConfirmId(a.id); setConfirmName(a.full_name); }} className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs flex items-center gap-1"><Trash2 size={11} />Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation */}
      {confirmId && (
        <>
          <div onClick={() => setConfirmId(null)} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-5 text-white flex items-center justify-between">
                <div><h3 className="text-lg font-bold">Delete Application</h3><p className="text-white/70 text-xs">This cannot be undone</p></div>
                <button onClick={() => setConfirmId(null)}><X size={18} /></button>
              </div>
              <div className="px-6 py-6 space-y-4">
                <p className="text-gray-700 text-sm text-center">Delete application by <span className="font-bold">{confirmName}</span>?</p>
                <div className="flex gap-3">
                  <button onClick={() => setConfirmId(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm">Cancel</button>
                  <button onClick={handleDelete} disabled={deleting} className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60">
                    {deleting ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />} Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Status Update Popup */}
      {statusPop && (
        <>
          <div onClick={() => setStatusPop(null)} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-4 text-white flex items-center justify-between">
                <h3 className="font-bold">Update Status</h3>
                <button onClick={() => setStatusPop(null)}><X size={17} /></button>
              </div>
              <div className="px-6 py-5 space-y-4">
                <select value={newStatus} onChange={e => setNewStatus(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="PENDING">PENDING</option>
                  <option value="APPROVED">APPROVED</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
                <div className="flex gap-3">
                  <button onClick={() => setStatusPop(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm">Cancel</button>
                  <button onClick={handleStatusUpdate} disabled={updating === statusPop?.id} className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60">
                    {updating === statusPop?.id ? <Loader2 size={15} className="animate-spin" /> : "Update"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* View Application Modal */}
      {viewApp && (
        <>
          <div onClick={() => setViewApp(null)} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-8 overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto">
              <div className="bg-gradient-to-r from-[#0c1e4a] to-[#0076d8] px-8 py-5 text-white flex items-center justify-between">
                <div><h3 className="text-xl font-bold">{viewApp.full_name}</h3><p className="text-white/70 text-sm">{viewApp.email}</p></div>
                <button onClick={() => setViewApp(null)} className="p-2 rounded-full bg-white/15 hover:bg-white/25"><X size={18} /></button>
              </div>
              <div className="px-8 py-6 space-y-5 max-h-[75vh] overflow-y-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Phone", value: viewApp.phone },
                    { label: "Experience", value: viewApp.experience || "—" },
                    { label: "Branch", value: viewApp.branch || "—" },
                    { label: "College", value: viewApp.college_name || "—" },
                    { label: "10th %", value: viewApp.tenth_percentage ? `${viewApp.tenth_percentage}%` : "—" },
                    { label: "12th %", value: viewApp.twelfth_percentage ? `${viewApp.twelfth_percentage}%` : "—" },
                    { label: "Graduation", value: viewApp.graduation_percentage ? `${viewApp.graduation_percentage}%` : "—" },
                    { label: "Status", value: viewApp.status },
                    { label: "Applied", value: viewApp.created_at ? new Date(viewApp.created_at).toLocaleDateString() : "—" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-sm font-bold text-gray-800">{value}</p>
                    </div>
                  ))}
                </div>
                {viewApp.skills && (
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Skills</p>
                    <p className="text-sm text-gray-700 bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">{viewApp.skills}</p>
                  </div>
                )}
                <div className="flex gap-3 pt-2">
                  <a href={viewApp.resume_url || getResumeUrl(viewApp.id)} target="_blank" rel="noreferrer"
                    className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-[#0076d8] to-[#0c1e4a] text-white font-bold text-sm hover:opacity-90 transition">
                    📄 View / Download Resume
                  </a>
                  <button onClick={() => setViewApp(null)} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50">Close</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ── PROJECT REQUESTS ──────────────────────────────────────────────────────────
const INQUIRY_BADGE = {
  "New Project": "bg-blue-50 text-blue-700 border border-blue-200",
  "Free Consultation": "bg-teal-50 text-teal-700 border border-teal-200",
  "Technical Support": "bg-purple-50 text-purple-700 border border-purple-200",
  "Business Partnership": "bg-amber-50 text-amber-700 border border-amber-200",
  "General Inquiry": "bg-gray-100 text-gray-700 border border-gray-200",
};

const ProjectRequestsSection = ({ requests, onRefresh }) => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [viewReq, setViewReq] = useState(null);
  const [statusPop, setStatusPop] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [updating, setUpdating] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmDeleteName, setConfirmDeleteName] = useState("");
  const [deleting, setDeleting] = useState(false);

  const inquiryTypes = ["All", "New Project", "Free Consultation", "Technical Support", "Business Partnership", "General Inquiry"];

  const filtered = requests.filter(r => {
    const q = search.toLowerCase();
    const matchSearch = !q || (r.full_name || "").toLowerCase().includes(q) || (r.email || "").toLowerCase().includes(q);
    const matchType = filterType === "All" || r.inquiry_type === filterType;
    return matchSearch && matchType;
  });

  const handleStatusUpdate = async () => {
    setUpdating(true);
    try { await updateProjectStatusApi(statusPop.id, newStatus); onRefresh(); setStatusPop(null); }
    catch (e) { console.error(e); }
    finally { setUpdating(false); }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteProjectRequestApi(confirmDeleteId);
      onRefresh();
      setConfirmDeleteId(null);
      setConfirmDeleteName("");
    } catch (e) { console.error(e); }
    finally { setDeleting(false); }
  };

  const DetailRow = ({ label, value }) => value ? (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide w-40 shrink-0">{label}</span>
      <span className="text-sm text-gray-800 font-medium">{value}</span>
    </div>
  ) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Project Requests</h2>
          <p className="text-sm text-gray-400 mt-0.5">{requests.length} total &mdash; {filtered.length} shown</p>
        </div>
        <button onClick={onRefresh} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800"><RefreshCw size={14} /> Refresh</button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name or email..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#0076d8]" />
          <span className="absolute left-3 top-2.5 text-gray-400"><svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></span>
          {search && <button onClick={() => setSearch("")} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-700"><X size={13} /></button>}
        </div>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map(t => (
            <button key={t} onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${filterType === t ? "bg-[#0076d8] text-white border-[#0076d8]" : "bg-white text-gray-600 border-gray-200 hover:border-[#0076d8] hover:text-[#0076d8]"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400"><FolderOpen size={40} className="mx-auto mb-3 opacity-40" />
            <p>{search || filterType !== "All" ? "No matching requests found" : "No project requests yet"}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <tr>{["#", "Name", "Email", "Phone", "Inquiry Type", "Status", "View", "Status", "Delete"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">{h}</th>
                ))}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((r, i) => (
                  <tr key={r.id || i} className="hover:bg-blue-50/30 transition">
                    <td className="px-4 py-3 text-gray-400 text-xs font-mono">{i + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0076d8] to-[#0c1e4a] flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {(r.full_name || "?")[0].toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 whitespace-nowrap">{r.full_name}</p>
                          {r.company_name && <p className="text-xs text-gray-400">{r.company_name}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 max-w-[160px] truncate">{r.email}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{r.phone || "—"}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${INQUIRY_BADGE[r.inquiry_type] || "bg-gray-100 text-gray-600 border border-gray-200"}`}>{r.inquiry_type || "—"}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor[r.status] || "bg-gray-100 text-gray-600"}`}>{r.status || "PENDING"}</span>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => setViewReq(r)} className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-semibold text-xs transition">View</button>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => { setStatusPop({ id: r.id, current: r.status }); setNewStatus(r.status || "PENDING"); }}
                        className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-600 font-semibold text-xs flex items-center gap-1 transition">
                        <RefreshCw size={11} /> Status
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => { setConfirmDeleteId(r.id); setConfirmDeleteName(r.full_name || "this request"); }}
                        className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs flex items-center gap-1 transition">
                        <Trash2 size={11} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Status Update Modal */}
      {statusPop && (
        <>
          <div onClick={() => setStatusPop(null)} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-4 text-white flex items-center justify-between">
                <h3 className="font-bold">Update Status</h3>
                <button onClick={() => setStatusPop(null)}><X size={17} /></button>
              </div>
              <div className="px-6 py-5 space-y-4">
                <select value={newStatus} onChange={e => setNewStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white">
                  <option value="PENDING">PENDING</option>
                  <option value="APPROVED">APPROVED</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
                <div className="flex gap-3">
                  <button onClick={() => setStatusPop(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm">Cancel</button>
                  <button onClick={handleStatusUpdate} disabled={updating}
                    className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60">
                    {updating ? <Loader2 size={15} className="animate-spin" /> : "Update"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* View Details Modal */}
      {viewReq && (
        <>
          <div onClick={() => setViewReq(null)} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-8 overflow-y-auto">
            <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto">
              <div className="bg-gradient-to-r from-[#0c1e4a] to-[#0076d8] px-8 py-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-xl font-extrabold">
                      {(viewReq.full_name || "?")[0].toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold">{viewReq.full_name}</h3>
                      {viewReq.company_name && <p className="text-white/70 text-sm">{viewReq.company_name}</p>}
                    </div>
                  </div>
                  <button onClick={() => setViewReq(null)} className="p-2 rounded-full bg-white/15 hover:bg-white/25"><X size={18} /></button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${statusColor[viewReq.status] || "bg-white/20 text-white"}`}>{viewReq.status || "PENDING"}</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white/20 text-white">{viewReq.inquiry_type}</span>
                </div>
              </div>
              <div className="px-8 py-6 max-h-[60vh] overflow-y-auto space-y-1">
                <DetailRow label="Email" value={viewReq.email} />
                <DetailRow label="Phone" value={viewReq.phone} />
                <DetailRow label="Company" value={viewReq.company_name} />
                <DetailRow label="Inquiry Type" value={viewReq.inquiry_type} />
                <DetailRow label="Service Required" value={viewReq.service_required} />
                <DetailRow label="Applied On" value={viewReq.created_at ? new Date(viewReq.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : null} />
                {viewReq.message && (
                  <div className="pt-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Message</p>
                    <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 leading-relaxed">{viewReq.message}</div>
                  </div>
                )}
                <div className="pt-4">
                  <button onClick={() => { setStatusPop({ id: viewReq.id, current: viewReq.status }); setNewStatus(viewReq.status || "PENDING"); setViewReq(null); }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold text-sm hover:opacity-90 transition flex items-center justify-center gap-2">
                    <RefreshCw size={15} /> Update Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDeleteId && (
        <>
          <div onClick={() => setConfirmDeleteId(null)} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-white flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2"><Trash2 size={16} /> Delete Request</h3>
                <button onClick={() => setConfirmDeleteId(null)}><X size={17} /></button>
              </div>
              <div className="px-6 py-5 space-y-4">
                <p className="text-sm text-gray-700">
                  Are you sure you want to delete the request from{" "}
                  <span className="font-bold text-gray-900">{confirmDeleteName}</span>?
                  <span className="block mt-1 text-xs text-red-500">This action cannot be undone.</span>
                </p>
                <div className="flex gap-3">
                  <button onClick={() => setConfirmDeleteId(null)}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm">
                    Cancel
                  </button>
                  <button onClick={handleDelete} disabled={deleting}
                    className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60">
                    {deleting ? <Loader2 size={15} className="animate-spin" /> : <><Trash2 size={14} /> Delete</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


// ── DEVELOPERS ───────────────────────────────────────────────────────────────
const DevelopersSection = ({ onRefresh }) => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [confirmId, setConfirmId] = useState(null); // for delete confirmation modal
  const [confirmName, setConfirmName] = useState("");
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const fetchDevs = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getAllUsersApi();
      setDevelopers(res.data || []);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchDevs(); }, [fetchDevs]);

  const filtered = developers.filter(d =>
    d.name?.toLowerCase().includes(search.toLowerCase())
  );

  const openConfirm = (dev) => { setConfirmId(dev.id); setConfirmName(dev.name); };
  const closeConfirm = () => { setConfirmId(null); setConfirmName(""); };

  const handleDelete = async () => {
    setDeleting(confirmId);
    closeConfirm();
    try { await deleteUserApi(confirmId); fetchDevs(); }
    catch (e) { console.error(e); }
    finally { setDeleting(null); }
  };

  const handleCreate = async (e) => {
    e.preventDefault(); setCreating(true); setError("");
    try {
      await createDeveloperApi(form.name, form.email, form.password);
      setSuccess(true); fetchDevs();
      setTimeout(() => { setSuccess(false); setCreateModalOpen(false); setForm({ name: "", email: "", password: "" }); }, 1500);
    } catch (err) { setError(err.response?.data?.message || "Failed to create developer."); }
    finally { setCreating(false); }
  };

  const inp = "w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0076d8] focus:border-transparent outline-none text-sm";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-gray-900">
          Developers <span className="ml-2 text-base font-normal text-gray-400">({filtered.length})</span>
        </h2>
        <button onClick={() => setCreateModalOpen(true)} className="flex items-center gap-2 bg-[#0076d8] hover:bg-[#0066c0] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-md">
          <UserPlus size={17} /> Create Developer
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-sm">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0076d8] focus:border-transparent outline-none bg-white shadow-sm"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <X size={15} />
          </button>
        )}
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-[#0076d8] border-t-transparent rounded-full animate-spin" /></div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <Code2 size={44} className="mx-auto mb-3 opacity-40" />
          <p>{search ? `No developer found for "${search}"` : "No developers found"}</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto max-h-[60vh] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                <tr>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-600 whitespace-nowrap">#</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-600 whitespace-nowrap">Name</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-600 whitespace-nowrap">Email</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-600 whitespace-nowrap">Status</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-600 whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((dev, i) => (
                  <tr key={dev.id} className="hover:bg-gray-50 transition">
                    <td className="px-5 py-4 text-gray-400 text-xs">{i + 1}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0076d8] to-[#0c1e4a] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {dev.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                        <span className="font-semibold text-gray-900 whitespace-nowrap">{dev.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{dev.email}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        Present
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => openConfirm(dev)}
                        disabled={deleting === dev.id}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs transition disabled:opacity-50"
                      >
                        {deleting === dev.id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                        {deleting === dev.id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation Modal ─────────────────────────────────────────── */}
      {confirmId && (
        <>
          <div onClick={closeConfirm} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-5 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Confirm Delete</h3>
                  <p className="text-white/75 text-xs mt-0.5">This action cannot be undone</p>
                </div>
                <button onClick={closeConfirm} className="p-2 rounded-full bg-white/15 hover:bg-white/25 transition"><X size={17} /></button>
              </div>
              <div className="px-6 py-6 space-y-5">
                <div className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0076d8] to-[#0c1e4a] flex items-center justify-center text-white font-bold flex-shrink-0">
                    {confirmName?.charAt(0)?.toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{confirmName}</p>
                    <p className="text-xs text-red-500 mt-0.5">Will be permanently deleted</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center">Are you sure you want to delete <span className="font-bold text-gray-900">{confirmName}</span>?</p>
                <div className="flex gap-3">
                  <button onClick={closeConfirm} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition">
                    Cancel
                  </button>
                  <button onClick={handleDelete} className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition flex items-center justify-center gap-2">
                    <Trash2 size={15} /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Create Developer Modal ────────────────────────────────────────────── */}
      {createModalOpen && (
        <>
          <div onClick={() => setCreateModalOpen(false)} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#0c1e4a] to-[#0076d8] px-8 py-5 text-white flex items-center justify-between">
                <div><h3 className="text-xl font-bold">Create Developer</h3><p className="text-white/70 text-sm">Add a new developer account</p></div>
                <button onClick={() => setCreateModalOpen(false)} className="p-2 rounded-full bg-white/15 hover:bg-white/25 transition"><X size={18} /></button>
              </div>
              <div className="px-8 py-6">
                {success ? (
                  <div className="flex flex-col items-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3"><CheckCircle size={36} className="text-green-500" /></div>
                    <p className="font-bold text-gray-900">Developer Created!</p>
                  </div>
                ) : (
                  <form onSubmit={handleCreate} className="space-y-4">
                    {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>}
                    <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Full Name *</label><input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Rahul Sharma" className={inp} /></div>
                    <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Email *</label><input required type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="rahul@example.com" className={inp} /></div>
                    <div><label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Password *</label><input required type="password" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="Min 8 chars, 1 upper, 1 number, 1 special" className={inp} /></div>
                    <button type="submit" disabled={creating} className="w-full bg-gradient-to-r from-[#0076d8] to-[#0c1e4a] text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60">
                      {creating ? <><Loader2 size={18} className="animate-spin" />Creating...</> : "Create Developer"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ── SETTINGS ──────────────────────────────────────────────────────────────────
const SettingsSection = ({ user }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-lg">
      <div className="flex items-center gap-5 mb-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0076d8] to-[#0c1e4a] flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
          {user?.name?.charAt(0)?.toUpperCase() || "A"}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
          <p className="text-gray-500">{user?.email}</p>
          <span className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Administrator</span>
        </div>
      </div>
      <div className="space-y-4">
        {[["Full Name", user?.name], ["Email Address", user?.email], ["Role", "Administrator"]].map(([label, val]) => (
          <div key={label} className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-500 text-sm">{label}</span>
            <span className="font-semibold text-gray-900 text-sm">{val || "—"}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── BLOGS SECTION ─────────────────────────────────────────────────────────────
const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [form, setForm] = useState({
    title: "", description: "", category: "Technology",
    author: "Kamlesh Shah", read_time: "5 min read",
    tags: "", content: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await getAllBlogsApi();
      setBlogs(res.data || []);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchBlogs(); }, []);

  const resetForm = () => {
    setForm({ title: "", description: "", category: "Technology", author: "Kamlesh Shah", read_time: "5 min read", tags: "", content: "" });
    setImageFile(null); setImagePreview(null); setEditId(null); setShowForm(false);
  };

  const openEdit = (blog) => {
    setEditId(blog.id);
    setForm({
      title: blog.title || "",
      description: blog.description || "",
      category: blog.category || "Technology",
      author: blog.author || "Kamlesh Shah",
      read_time: blog.read_time || "5 min read",
      tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : (blog.tags || ""),
      content: blog.content || "",
    });
    setImagePreview(blog.image_url || null);
    setImageFile(null);
    setShowForm(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) return;
    setSaving(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, k === "tags" ? JSON.stringify(v.split(",").map(t => t.trim()).filter(Boolean)) : v));
      if (imageFile) fd.append("image", imageFile);
      if (editId) { await updateBlogApi(editId, fd); }
      else { await createBlogApi(fd); }
      await fetchBlogs();
      resetForm();
    } catch (err) { console.error(err); alert("Failed to save blog post."); }
    finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try { await deleteBlogApi(deleteId); setDeleteId(null); await fetchBlogs(); }
    catch (e) { alert("Failed to delete."); }
  };

  const CATEGORIES = ["Technology", "Business & Strategy", "Proptech", "IT Solutions", "Digital Transformation"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Blog Management</h2>
          <p className="text-sm text-gray-500 mt-0.5">Create, edit and manage blog posts</p>
        </div>
        <button onClick={() => { resetForm(); setShowForm(true); }}
          className="flex items-center gap-2 bg-[#0076d8] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#005db0] transition shadow">
          <Plus size={16} /> New Blog Post
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">{editId ? "Edit Blog Post" : "Create Blog Post"}</h3>
              <button onClick={resetForm} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><X size={18} /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Image Upload */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">Cover Image</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center relative hover:border-[#0076d8] transition">
                  {imagePreview ? (
                    <div className="relative">
                      <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
                      <button type="button" onClick={() => { setImageFile(null); setImagePreview(null); }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600">
                        <X size={14} /></button>
                    </div>
                  ) : (
                    <label htmlFor="blog-img" className="cursor-pointer flex flex-col items-center gap-2 text-gray-400">
                      <ImageIcon size={32} />
                      <span className="text-sm">Click to upload image</span>
                      <span className="text-xs">JPG, PNG, WEBP — Max 10MB</span>
                    </label>
                  )}
                  <input id="blog-img" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Title *</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required
                  placeholder="Blog post title" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8]" />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Short Description *</label>
                <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required rows={2}
                  placeholder="Brief description shown on card" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8] resize-none" />
              </div>

              {/* Category + Author + Read Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
                  <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8] bg-white">
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Author</label>
                  <input value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
                    placeholder="Author name" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Read Time</label>
                  <input value={form.read_time} onChange={e => setForm(f => ({ ...f, read_time: e.target.value }))}
                    placeholder="5 min read" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8]" />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Tags <span className="font-normal text-gray-400">(comma separated)</span></label>
                <input value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                  placeholder="react, nodejs, proptech" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8]" />
              </div>

              {/* Content */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Content <span className="font-normal text-gray-400">(HTML supported)</span></label>
                <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={8}
                  placeholder="<p>Write your blog content here...</p>" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8] resize-y font-mono" />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={resetForm} className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition">Cancel</button>
                <button type="submit" disabled={saving}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0076d8] text-white rounded-xl text-sm font-semibold hover:bg-[#005db0] transition disabled:opacity-50">
                  {saving ? <Loader2 size={14} className="animate-spin" /> : <CheckCircle size={14} />}
                  {editId ? "Update Post" : "Publish Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Delete Blog Post?</h4>
            <p className="text-sm text-gray-500 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteId(null)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Blog List */}
      {loading ? (
        <div className="flex justify-center py-16"><div className="w-10 h-10 border-4 border-[#0076d8] border-t-transparent rounded-full animate-spin" /></div>
      ) : blogs.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
          <BookOpen size={40} className="text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-700">No blog posts yet</h3>
          <p className="text-gray-400 text-sm mt-1">Create your first blog post to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              <div className="relative h-44 bg-gray-100">
                <img src={blog.image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"}
                  alt={blog.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[#0076d8] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">{blog.category}</span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">{blog.title}</h4>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">{blog.description}</p>
                <div className="flex items-center gap-3 text-[10px] text-gray-400 mb-3">
                  <span>{blog.author}</span>
                  <span>·</span>
                  <span>{blog.read_time}</span>
                  <span>·</span>
                  <span>{blog.views ?? 0} views</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <span className="text-[10px] text-gray-400">{blog.created_at ? new Date(blog.created_at).toLocaleDateString() : ""}</span>
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(blog)} className="flex items-center gap-1 text-xs text-[#0076d8] hover:underline font-medium">
                      <Pencil size={12} /> Edit
                    </button>
                    <button onClick={() => setDeleteId(blog.id)} className="flex items-center gap-1 text-xs text-red-500 hover:underline font-medium">
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ── MAIN DASHBOARD ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("insights");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getMeApi()
      .then(d => {
        setUser(d.user);
        sessionStorage.setItem("hously_user", JSON.stringify(d.user));
      })
      .catch(() => navigate("/", { replace: true }))
      .finally(() => setLoading(false));
  }, []);

  // ── Block browser Back/Forward button while inside Dashboard ────────────
  // useRef stores the handler so logout can remove it before navigating away
  const popStateHandlerRef = React.useRef(null);

  useEffect(() => {
    if (!user) return;

    // Remove any previous listener before adding a new one
    if (popStateHandlerRef.current) {
      window.removeEventListener("popstate", popStateHandlerRef.current);
    }

    // Push a dummy entry on top of history so the first Back press
    // fires popstate (instead of immediately leaving the page)
    window.history.pushState(null, "", "/dashboard");

    const handlePopState = () => {
      // Push /dashboard back into history immediately
      window.history.pushState(null, "", "/dashboard");
      // Also tell React Router to stay — this is the critical missing piece
      navigate("/dashboard", { replace: true });
    };

    popStateHandlerRef.current = handlePopState;
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [user, navigate]);

  const fetchData = useCallback(async () => {
    try {
      const [appsRes, jobsRes, reqsRes] = await Promise.all([getJobApplicationsApi(), getJobPostingsApi(), getProjectRequestsApi()]);
      setApplications(appsRes.data || []);
      setJobs(jobsRes.data || []);
      setRequests(reqsRes.data || []);
    } catch (e) { console.error(e); }
  }, []);

  useEffect(() => { if (!loading && user) fetchData(); }, [loading, user]);

  const handleLogout = async () => {
    // 🔑 Remove the popstate listener FIRST so it doesn't fight the logout redirect
    if (popStateHandlerRef.current) {
      window.removeEventListener("popstate", popStateHandlerRef.current);
      popStateHandlerRef.current = null;
    }
    try {
      await logoutApi();
    } finally {
      sessionStorage.removeItem("hously_user");
      // Replace current history entry with "/" so Back won't return to /dashboard
      window.history.replaceState(null, "", "/");
      navigate("/", { replace: true });
    }
  };

  const NAV = [
    { id: "insights", label: "Insights", icon: BarChart3 },
    { id: "createJob", label: "Create Job", icon: Briefcase },
    { id: "applications", label: "Job Applications", icon: FileText },
    { id: "requests", label: "Project Requests", icon: FolderOpen },
    { id: "blogs", label: "Blogs", icon: BookOpen },
    { id: "developers", label: "Developers", icon: Code2 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "insights": return <InsightsSection applications={applications} jobs={jobs} requests={requests} />;
      case "createJob": return <CreateJobSection jobs={jobs} onRefresh={fetchData} />;
      case "applications": return <ApplicationsSection applications={applications} onRefresh={fetchData} />;
      case "requests": return <ProjectRequestsSection requests={requests} onRefresh={fetchData} />;

      case "developers": return <DevelopersSection onRefresh={fetchData} />;
      case "blogs": return <BlogsSection />;
      case "settings": return <SettingsSection user={user} />;
      default: return null;
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-[#0076d8] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 font-medium">Loading dashboard...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar user={user} onMenuClick={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />

      {/* Mobile Overlay */}
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/50 lg:hidden" />}

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#0c1e4a] z-40 flex flex-col transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="px-4 pt-4 pb-2">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 px-3 mb-2">Menu</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {NAV.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => { setActiveSection(id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeSection === id ? "bg-[#0076d8] text-white shadow-lg" : "text-white/65 hover:bg-white/10 hover:text-white"}`}>
              <Icon size={18} />{label}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="h-px bg-white/10 my-3" />
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition text-sm font-semibold">
            <LogOut size={18} />Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-5 sm:p-8 max-w-7xl mx-auto">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}
