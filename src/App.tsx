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
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">ICP Nordic Build Group A/S</h1>
            <p className="text-slate-500 text-sm mb-4">Construction · Nordic Region · B2B · Enterprise</p>
            <div className="flex items-center text-slate-600 text-sm font-medium">
              <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-1.5 py-0.5 rounded mr-2 tracking-wider">I3</span>
              ICP Nordic Build Group A/S
            </div>
          </div>
          <div className="flex gap-4">
            <KpiCard title="Priority Score" value="87" icon={<TrendingUp size={24} className="text-amber-500" />} colorClass="border-amber-300 shadow-[0_4px_15px_rgba(251,191,36,0.2)]" />
            <KpiCard title="Signals" value="6" icon={<Activity size={24} className="text-blue-500" />} colorClass="border-blue-300 shadow-[0_4px_15px_rgba(59,130,246,0.2)]" />
            <KpiCard title="Opportunities" value="3" icon={<Target size={24} className="text-emerald-500" />} colorClass="border-emerald-300 shadow-[0_4px_15px_rgba(16,185,129,0.2)]" />
            <KpiCard title="Last Activity" value="8d" icon={<Clock size={24} className="text-rose-500" />} colorClass="border-rose-300 shadow-[0_4px_15px_rgba(244,63,94,0.2)]" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center bg-white border border-slate-200 shadow-sm rounded-2xl mb-8">
          <div className="flex gap-8 text-slate-500 text-[15px] font-medium px-6">
            <button className="hover:text-slate-900 transition-colors py-4">Overview</button>
            <button className="hover:text-slate-900 transition-colors py-4">Signals</button>
            <button className="hover:text-slate-900 transition-colors py-4">Opportunities</button>
            <div className="relative flex items-center">
              <button className="text-slate-900 font-semibold py-4">Activity</button>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 rounded-t-md"></div>
            </div>
            <button className="hover:text-slate-900 transition-colors py-4">People</button>
            <button className="hover:text-slate-900 transition-colors py-4">Company</button>
          </div>
          <div className="pr-3">
            <button className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm border border-slate-200 transition-colors font-medium">
              <Phone size={14} className="text-slate-500" /> Call this week <ChevronDown size={14} className="text-slate-500" />
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <Card 
              title="Current Status" 
              icon={<CheckCircle size={18} className="text-blue-500" />} 
              colorClass="bg-blue-50/50 border-blue-300 shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
            >
              <div className="space-y-5 text-sm mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 w-20">Status:</span>
                  <span className="border border-blue-300 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100/50">Proposal sent</span>
                  <span className="text-slate-500 ml-2">Interest:</span>
                  <span className="border border-amber-300 text-amber-700 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100/50">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 w-20">Last contact:</span>
                  <span className="text-slate-900 font-medium">8 days ago</span>
                  <span className="text-slate-500 ml-2">Risk:</span>
                  <span className="border border-rose-300 text-rose-700 px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100/50 flex items-center gap-1.5">
                    <AlertTriangle size={12} /> No response in 8 days
                  </span>
                </div>
              </div>
            </Card>

            <Card 
              title="Call Summary" 
              subtitle="3 interactions recorded"
              icon={<Phone size={18} className="text-emerald-500" />} 
              colorClass="bg-emerald-50/50 border-emerald-300 shadow-[0_4px_20px_rgba(16,185,129,0.1)]"
            >
              <p className="text-slate-700 text-sm leading-relaxed mt-2">
                Interested after intro call, asked for examples. Follow-up sent. No response after latest attempt.
              </p>
              <div className="flex justify-end mt-3">
                <MessageSquare size={16} className="text-slate-400" />
              </div>
            </Card>

            <Card 
              title="Email Summary" 
              subtitle="2 emails exchanged"
              icon={<Mail size={18} className="text-amber-500" />} 
              colorClass="bg-amber-50/50 border-amber-300 shadow-[0_4px_20px_rgba(245,158,11,0.1)]"
            >
              <p className="text-slate-700 text-sm leading-relaxed mt-2">
                Sent proposal and follow-up emails. Client showed initial interest but has not replied after receiving detailed material.
              </p>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <Card 
              title="Actions — What to do next" 
              icon={<Zap size={18} className="text-purple-500" />} 
              colorClass="bg-white border-purple-300 shadow-[0_4px_20px_rgba(168,85,247,0.1)]"
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
              icon={<Phone size={18} className="text-blue-500" />} 
              colorClass="bg-blue-50/50 border-blue-300 shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
            >
              <div className="space-y-5 relative mt-4">
                <div className="absolute left-[43px] top-2 bottom-2 w-px bg-slate-200" />
                <TimelineItem 
                  date="12 Mar" 
                  title="Intro call → interested, asked for" 
                  subtitle="examples (Positive)" 
                  tag="Positive" 
                  tagColor="green" 
                  dotColor="bg-emerald-500" 
                />
                <TimelineItem 
                  date="15 Mar" 
                  title="Follow-up" 
                  subtitle="→ sent material to prospect (Sent)" 
                  tag="Sent" 
                  tagColor="purple" 
                  dotColor="bg-blue-500" 
                />
                <TimelineItem 
                  date="22 Mar" 
                  title="No response" 
                  subtitle="Follow-up attempt unanswered (At Risk)" 
                  tag="At Risk" 
                  tagColor="red" 
                  dotColor="bg-rose-500" 
                />
              </div>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <Card 
              title="Call Timeline" 
              icon={<Phone size={18} className="text-blue-500" />} 
              colorClass="bg-white border-blue-300 shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
            >
              <div className="space-y-5 relative mt-4">
                <div className="absolute left-[43px] top-2 bottom-2 w-px bg-slate-200" />
                <TimelineItem 
                  date="12 Mar" 
                  title="Intro call" 
                  subtitle="→ interested, asked for examples" 
                  tag="Positive" 
                  tagColor="green" 
                  dotColor="bg-emerald-500" 
                />
                <TimelineItem 
                  date="15 Mar" 
                  title="Follow-up" 
                  subtitle="→ sent material to prospect (Sent)" 
                  tag="Sent" 
                  tagColor="purple" 
                  dotColor="bg-blue-500" 
                />
                <TimelineItem 
                  date="22 Mar" 
                  title="No response" 
                  subtitle="Follow-up attempt unanswered (At Risk)" 
                  tag="At Risk" 
                  tagColor="red" 
                  dotColor="bg-rose-500" 
                />
              </div>
            </Card>

            <Card 
              title="Email Timeline" 
              icon={<Mail size={18} className="text-amber-500" />} 
              colorClass="bg-amber-50/50 border-amber-300 shadow-[0_4px_20px_rgba(245,158,11,0.1)]"
            >
              <div className="space-y-5 relative mt-4">
                <div className="absolute left-[43px] top-2 bottom-2 w-px bg-slate-200" />
                <TimelineItem 
                  date="16 Mar" 
                  title="Proposal sent" 
                  subtitle="Detailed proposal delivered (Sent)" 
                  tag="Sent" 
                  tagColor="purple" 
                  dotColor="bg-purple-500" 
                />
                <TimelineItem 
                  date="18 Mar" 
                  title="Follow-up email" 
                  subtitle="Reminder with added context (Follow-up)" 
                  tag="Follow-up" 
                  tagColor="yellow" 
                  dotColor="bg-amber-500" 
                />
                <TimelineItem 
                  date="22 Mar" 
                  title="No reply" 
                  subtitle="Prospect went silent (No Reply)" 
                  tag="No Reply" 
                  tagColor="red" 
                  dotColor="bg-rose-500" 
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
  <div className={`border-2 rounded-xl p-4 flex flex-col justify-between w-36 bg-white ${colorClass}`}>
    <div className="flex justify-between items-center mb-3 text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
      {title} <ChevronRight size={14} className="text-slate-400" />
    </div>
    <div className="flex justify-between items-end">
      <span className="text-4xl font-bold text-slate-900 leading-none">{value}</span>
      <div className="mb-1">{icon}</div>
    </div>
  </div>
);

const Card = ({ title, icon, children, colorClass, subtitle }: { title: string, icon: React.ReactNode, children: React.ReactNode, colorClass: string, subtitle?: string }) => (
  <div className={`border-2 rounded-xl p-5 ${colorClass}`}>
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-slate-900 font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      {subtitle && <span className="text-slate-500 text-xs">{subtitle}</span>}
    </div>
    {children}
  </div>
);

const ActionItem = ({ number, title, subtitle, color }: { number: string, title: string, subtitle: string, color: 'purple' | 'green' | 'blue' }) => {
  const colorMap = {
    purple: 'border-purple-200 bg-purple-50',
    green: 'border-emerald-200 bg-emerald-50',
    blue: 'border-blue-200 bg-blue-50',
  };
  
  const numberBgMap = {
    purple: 'bg-purple-200 text-purple-800',
    green: 'bg-emerald-200 text-emerald-800',
    blue: 'bg-blue-200 text-blue-800',
  };

  return (
    <div className={`flex items-center justify-between border-2 rounded-lg p-3 transition-colors hover:brightness-95 cursor-pointer ${colorMap[color]}`}>
      <div className="flex items-center gap-3">
        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${numberBgMap[color]}`}>
          {number}
        </div>
        <div>
          <div className="text-slate-900 text-sm font-semibold">{title}</div>
          <div className="text-slate-600 text-[11px] mt-0.5">{subtitle}</div>
        </div>
      </div>
      <ArrowRight size={16} className="text-slate-400" />
    </div>
  );
};

const TimelineItem = ({ date, title, subtitle, tag, tagColor, dotColor }: { date: string, title: string, subtitle: string, tag: string, tagColor: 'green' | 'purple' | 'red' | 'yellow', dotColor: string }) => {
  const tagColors = {
    green: 'border-emerald-200 text-emerald-700 bg-emerald-50',
    purple: 'border-purple-200 text-purple-700 bg-purple-50',
    red: 'border-rose-200 text-rose-700 bg-rose-50',
    yellow: 'border-amber-200 text-amber-700 bg-amber-50',
  };
  
  return (
    <div className="flex items-start gap-4 relative">
      <div className="text-slate-500 text-xs w-8 pt-0.5 text-right shrink-0 font-medium">{date}</div>
      <div className="relative z-10 flex flex-col items-center justify-start pt-1.5">
        <div className={`w-2.5 h-2.5 rounded-full ${dotColor} ring-4 ring-white`} />
      </div>
      <div className="flex-1 flex justify-between items-start gap-2">
        <div>
          <div className="text-slate-900 text-sm font-semibold leading-tight">{title}</div>
          <div className="text-slate-600 text-xs mt-1">{subtitle}</div>
        </div>
        <span className={`border px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap ${tagColors[tagColor]}`}>
          {tag}
        </span>
      </div>
    </div>
  );
};
