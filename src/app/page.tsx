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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-foreground">
          Welcome, Jerry <span className="text-xl">🔥</span>
        </h2>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 bg-white border border-border/80 text-foreground text-sm font-semibold rounded-xl h-11 px-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-muted-bg transition-colors">
            <IconWrapper icon={Calendar} size={18} className="text-muted-foreground" />
            16 May 2024
          </button>
          <Button variant="primary" className="rounded-xl h-11 px-5 font-semibold shadow-md shadow-primary/30 w-full sm:w-auto bg-primary">
            <IconWrapper icon={DownloadCloud} size={18} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="flex flex-col xl:flex-row gap-6">

        {/* Left Container (takes roughly 65-70%) */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">

          {/* Top Row: Balance & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 lg:col-span-6 h-[260px]">
              <BalanceWidget />
            </div>
            <div className="md:col-span-7 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 h-[260px]">
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

          {/* Cashflow Chart */}
          <div className="w-full">
            <CashflowWidget />
          </div>

          {/* Savings */}
          <div className="w-full">
            <SavingsWidget />
          </div>

        </div>

        {/* Right Container (takes roughly 30-35%) */}
        <div className="w-full xl:w-[380px] shrink-0 flex flex-col gap-6">
          <QuickTransferWidget />
          <div className="flex-1 min-h-[500px]">
            <RecentActivityWidget />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
