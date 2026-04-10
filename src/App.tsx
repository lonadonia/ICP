import React from 'react';
import { 
  ChevronRight, 
  TrendingUp, 
  Activity, 
  Target, 
  Clock, 
  ChevronDown, 
  Phone, 
  CheckCircle, 
  AlertTriangle, 
  MessageSquare, 
  Mail, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 font-sans text-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">ICP Nordic Build Group A/S</h1>
            <p className="text-slate-400 text-sm mb-4">Construction · Nordic Region · B2B · Enterprise</p>
            <div className="flex items-center text-slate-300 text-sm">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mr-2 tracking-wider">IB</span>
              ICP Nordic Build Group A/S
            </div>
          </div>
          <div className="flex gap-4">
            <KpiCard title="Priority Score" value="87" icon={<TrendingUp size={24} className="text-yellow-500" />} colorClass="border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.15)]" />
            <KpiCard title="Signals" value="6" icon={<Activity size={24} className="text-blue-400" />} colorClass="border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]" />
            <KpiCard title="Opportunities" value="3" icon={<Target size={24} className="text-green-400" />} colorClass="border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.15)]" />
            <KpiCard title="Last Activity" value="8d" icon={<Clock size={24} className="text-red-400" />} colorClass="border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.15)]" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center border-b border-slate-800 mb-8 pb-0">
          <div className="flex gap-8 text-slate-400 text-sm font-medium">
            <button className="hover:text-white pb-3 transition-colors">Overview</button>
            <button className="hover:text-white pb-3 transition-colors">Signals</button>
            <button className="hover:text-white pb-3 transition-colors">Opportunities</button>
            <button className="text-white border-b-2 border-white pb-3">Activity</button>
            <button className="hover:text-white pb-3 transition-colors">People</button>
            <button className="hover:text-white pb-3 transition-colors">Company</button>
          </div>
          <button className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm border border-slate-700 mb-2 transition-colors">
            <Phone size={14} /> Call this week <ChevronDown size={14} />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <Card 
              title="Current Status" 
              icon={<CheckCircle size={18} className="text-blue-400" />} 
              colorClass="border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <div className="space-y-5 text-sm mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 w-20">Status:</span>
                  <span className="border border-blue-500/50 text-blue-400 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10">Proposal sent</span>
                  <span className="text-slate-400 ml-2">Interest:</span>
                  <span className="border border-yellow-500/50 text-yellow-400 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 w-20">Last contact:</span>
                  <span className="text-white font-medium">8 days ago</span>
                  <span className="text-slate-400 ml-2">Risk:</span>
                  <span className="border border-red-500/50 text-red-400 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 flex items-center gap-1.5">
                    <AlertTriangle size={12} /> No response in 8 days
                  </span>
                </div>
              </div>
            </Card>

            <Card 
              title="Call Summary" 
              subtitle="3 interactions recorded"
              icon={<Phone size={18} className="text-green-400" />} 
              colorClass="border-green-500/40 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              <p className="text-slate-300 text-sm leading-relaxed mt-2">
                Interested after intro call, asked for examples. Follow-up sent. No response after latest attempt.
              </p>
              <div className="flex justify-end mt-3">
                <MessageSquare size={16} className="text-slate-500" />
              </div>
            </Card>

            <Card 
              title="Email Summary" 
              subtitle="2 emails exchanged"
              icon={<Mail size={18} className="text-orange-400" />} 
              colorClass="border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
            >
              <p className="text-slate-300 text-sm leading-relaxed mt-2">
                Sent proposal and follow-up emails. Client showed initial interest but has not replied after receiving detailed material.
              </p>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <Card 
              title="Actions — What to do next" 
              icon={<Zap size={18} className="text-purple-400" />} 
              colorClass="border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
            >
              <div className="space-y-3 mt-2">
                <ActionItem 
                  number="1" 
                  title="Follow up with performance angle" 
                  subtitle="High priority action" 
                  color="purple" 
                />
                <ActionItem 
                  number="2" 
                  title="Reference hiring signals" 
                  subtitle="Use in next outreach" 
                  color="green" 
                />
                <ActionItem 
                  number="3" 
                  title="Suggest short call instead of full meeting" 
                  subtitle="Lower commitment ask" 
                  color="blue" 
                />
              </div>
            </Card>

            <Card 
              title="Call Timeline" 
              icon={<Phone size={18} className="text-blue-400" />} 
              colorClass="border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <div className="space-y-5 relative mt-4">
                <div className="absolute left-[43px] top-2 bottom-2 w-px bg-slate-700/50" />
                <TimelineItem 
                  date="12 Mar" 
                  title="Intro call → interested, asked for" 
                  subtitle="examples (Positive)" 
                  tag="Positive" 
                  tagColor="green" 
                  dotColor="bg-green-400" 
                />
                <TimelineItem 
                  date="15 Mar" 
                  title="Follow-up" 
                  subtitle="→ sent material to prospect (Sent)" 
                  tag="Sent" 
                  tagColor="purple" 
                  dotColor="bg-blue-400" 
                />
                <TimelineItem 
                  date="22 Mar" 
                  title="No response" 
                  subtitle="Follow-up attempt unanswered (At Risk)" 
                  tag="At Risk" 
                  tagColor="red" 
                  dotColor="bg-red-400" 
                />
              </div>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <Card 
              title="Call Timeline" 
              icon={<Phone size={18} className="text-blue-400" />} 
              colorClass="border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <div className="space-y-5 relative mt-4">
                <div className="absolute left-[43px] top-2 bottom-2 w-px bg-slate-700/50" />
                <TimelineItem 
                  date="12 Mar" 
                  title="Intro call" 
                  subtitle="→ interested, asked for examples" 
                  tag="Positive" 
                  tagColor="green" 
                  dotColor="bg-green-400" 
                />
                <TimelineItem 
                  date="15 Mar" 
                  title="Follow-up" 
                  subtitle="→ sent material to prospect (Sent)" 
                  tag="Sent" 
                  tagColor="purple" 
                  dotColor="bg-blue-400" 
                />
                <TimelineItem 
                  date="22 Mar" 
                  title="No response" 
                  subtitle="Follow-up attempt unanswered (At Risk)" 
                  tag="At Risk" 
                  tagColor="red" 
                  dotColor="bg-red-400" 
                />
              </div>
            </Card>

            <Card 
              title="Email Timeline" 
              icon={<Mail size={18} className="text-green-400" />} 
              colorClass="border-green-500/40 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              <div className="space-y-5 relative mt-4">
                <div className="absolute left-[43px] top-2 bottom-2 w-px bg-slate-700/50" />
                <TimelineItem 
                  date="16 Mar" 
                  title="Proposal sent" 
                  subtitle="Detailed proposal delivered (Sent)" 
                  tag="Sent" 
                  tagColor="purple" 
                  dotColor="bg-purple-400" 
                />
                <TimelineItem 
                  date="18 Mar" 
                  title="Follow-up email" 
                  subtitle="Reminder with added context (Follow-up)" 
                  tag="Follow-up" 
                  tagColor="yellow" 
                  dotColor="bg-yellow-400" 
                />
                <TimelineItem 
                  date="22 Mar" 
                  title="No reply" 
                  subtitle="Prospect went silent (No Reply)" 
                  tag="No Reply" 
                  tagColor="red" 
                  dotColor="bg-red-400" 
                />
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

const KpiCard = ({ title, value, icon, colorClass }: { title: string, value: string, icon: React.ReactNode, colorClass: string }) => (
  <div className={`border rounded-xl p-4 flex flex-col justify-between w-36 bg-slate-900/60 backdrop-blur-md ${colorClass}`}>
    <div className="flex justify-between items-center mb-3 text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
      {title} <ChevronRight size={14} className="text-slate-500" />
    </div>
    <div className="flex justify-between items-end">
      <span className="text-4xl font-bold text-white leading-none">{value}</span>
      <div className="mb-1">{icon}</div>
    </div>
  </div>
);

const Card = ({ title, icon, children, colorClass, subtitle }: { title: string, icon: React.ReactNode, children: React.ReactNode, colorClass: string, subtitle?: string }) => (
  <div className={`border rounded-xl p-5 bg-slate-900/60 backdrop-blur-md ${colorClass}`}>
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-white font-medium">
        {icon}
        <span>{title}</span>
      </div>
      {subtitle && <span className="text-slate-400 text-xs">{subtitle}</span>}
    </div>
    {children}
  </div>
);

const ActionItem = ({ number, title, subtitle, color }: { number: string, title: string, subtitle: string, color: 'purple' | 'green' | 'blue' }) => {
  const colorMap = {
    purple: 'border-purple-500/40 bg-purple-500/5 text-purple-400',
    green: 'border-green-500/40 bg-green-500/5 text-green-400',
    blue: 'border-blue-500/40 bg-blue-500/5 text-blue-400',
  };
  
  const numberBgMap = {
    purple: 'bg-purple-500/20 text-purple-300',
    green: 'bg-green-500/20 text-green-300',
    blue: 'bg-blue-500/20 text-blue-300',
  };

  return (
    <div className={`flex items-center justify-between border rounded-lg p-3 transition-colors hover:bg-slate-800/50 cursor-pointer ${colorMap[color]}`}>
      <div className="flex items-center gap-3">
        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${numberBgMap[color]}`}>
          {number}
        </div>
        <div>
          <div className="text-slate-200 text-sm font-medium">{title}</div>
          <div className="text-slate-400 text-[11px] mt-0.5">{subtitle}</div>
        </div>
      </div>
      <ArrowRight size={16} className="text-slate-500" />
    </div>
  );
};

const TimelineItem = ({ date, title, subtitle, tag, tagColor, dotColor }: { date: string, title: string, subtitle: string, tag: string, tagColor: 'green' | 'purple' | 'red' | 'yellow', dotColor: string }) => {
  const tagColors = {
    green: 'border-green-500/40 text-green-400 bg-green-500/10',
    purple: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    red: 'border-red-500/40 text-red-400 bg-red-500/10',
    yellow: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
  };
  
  return (
    <div className="flex items-start gap-4 relative">
      <div className="text-slate-400 text-xs w-8 pt-0.5 text-right shrink-0 font-medium">{date}</div>
      <div className="relative z-10 flex flex-col items-center justify-start pt-1.5">
        <div className={`w-2.5 h-2.5 rounded-full ${dotColor} ring-4 ring-slate-900`} />
      </div>
      <div className="flex-1 flex justify-between items-start gap-2">
        <div>
          <div className="text-slate-200 text-sm font-medium leading-tight">{title}</div>
          <div className="text-slate-400 text-xs mt-1">{subtitle}</div>
        </div>
        <span className={`border px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap ${tagColors[tagColor]}`}>
          {tag}
        </span>
      </div>
    </div>
  );
};
