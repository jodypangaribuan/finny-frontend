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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 lg:mb-5 gap-3">
        <h2 className="text-base lg:text-lg font-bold text-foreground">
          Welcome, Jerry <span className="text-sm lg:text-base">🔥</span>
        </h2>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-1.5 bg-white border border-border/60 text-foreground text-[11px] lg:text-xs font-semibold rounded-lg h-8 lg:h-9 px-2.5 lg:px-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:bg-muted-bg transition-colors">
            <IconWrapper icon={Calendar} size={13} className="text-muted-foreground" />
            16 May 2024
          </button>
          <Button variant="primary" className="rounded-lg h-8 lg:h-9 px-3 lg:px-4 text-[11px] lg:text-xs font-semibold shadow-md shadow-primary/25 flex-1 sm:flex-none bg-primary">
            <IconWrapper icon={DownloadCloud} size={13} className="mr-0.5" />
            Export
          </Button>
        </div>
      </div>

      {/* Mobile: Balance card first, full width */}
      <div className="lg:hidden flex flex-col gap-3 mb-3">
        <BalanceWidget />
        <div className="grid grid-cols-2 gap-3">
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

      {/* Desktop: Original grid layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-4 mb-4">
        <div className="lg:col-span-5">
          <BalanceWidget />
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
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

      {/* Mobile: stacked widgets */}
      <div className="lg:hidden flex flex-col gap-3">
        <CashflowWidget />
        <QuickTransferWidget />
        <SavingsWidget />
        <RecentActivityWidget />
      </div>

      {/* Desktop: 2-column layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-4">
        <div className="xl:col-span-5 flex flex-col gap-4">
          <QuickTransferWidget />
          <RecentActivityWidget />
        </div>
        <div className="xl:col-span-7 flex flex-col gap-4">
          <CashflowWidget />
          <SavingsWidget />
        </div>
      </div>
    </DashboardLayout>
  );
}
