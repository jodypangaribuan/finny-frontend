import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { BalanceWidget } from '@/components/organisms/BalanceWidget';
import { QuickTransferWidget } from '@/components/organisms/QuickTransferWidget';
import { CashflowWidget } from '@/components/organisms/CashflowWidget';
import { RecentActivityWidget } from '@/components/organisms/RecentActivityWidget';
import { SavingsWidget } from '@/components/organisms/SavingsWidget';
import { StatCard } from '@/components/molecules/StatCard';
import { Button } from '@/components/atoms/Button';
import { IconWrapper } from '@/components/atoms/IconWrapper';
import { Calendar, DownloadCloud } from 'lucide-react';

export default function Home() {
  return (
    <DashboardLayout>
      {/* Top action row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
        <h2 className="text-lg font-bold text-foreground">
          Welcome, Jerry <span className="text-base">🔥</span>
        </h2>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button className="flex items-center gap-1.5 bg-white border border-border/60 text-foreground text-xs font-semibold rounded-lg h-9 px-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:bg-muted-bg transition-colors">
            <IconWrapper icon={Calendar} size={14} className="text-muted-foreground" />
            16 May 2024
          </button>
          <Button variant="primary" className="rounded-lg h-9 px-4 text-xs font-semibold shadow-md shadow-primary/25 w-full sm:w-auto bg-primary">
            <IconWrapper icon={DownloadCloud} size={14} className="mr-1" />
            Export
          </Button>
        </div>
      </div>

      {/* Top Row: Balance + Monthly Spent + Monthly Income */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        <div className="lg:col-span-5">
          <BalanceWidget />
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard
            title="Monthly Spent"
            amount="$45,623.48"
            trend={16.5}
            comparisonText="Compared to last month"
            hasDropdown
          />
          <StatCard
            title="Monthly Income"
            amount="$84,884.80"
            trend={-12.8}
            comparisonText="Compared to last month"
            hasDropdown
          />
        </div>
      </div>

      {/* Bottom Section: 2-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        {/* Left Column: Quick Transfer + Recent Activity */}
        <div className="xl:col-span-5 flex flex-col gap-4">
          <QuickTransferWidget />
          <RecentActivityWidget />
        </div>

        {/* Right Column: Cashflow + Savings */}
        <div className="xl:col-span-7 flex flex-col gap-4">
          <CashflowWidget />
          <SavingsWidget />
        </div>
      </div>
    </DashboardLayout>
  );
}
