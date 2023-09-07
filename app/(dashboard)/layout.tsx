import Navbar from "@/components/navbar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { getFavorites } from "@/lib/favorites";

import styles from "./dashboard.module.scss";
import TaskBar from "@/components/Taskbar/taskbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  const favoriteTools = await getFavorites();

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <TaskBar
        isPro={isPro}
        apiLimitCount={apiLimitCount}
        favoriteTools={favoriteTools}
      />

      <Navbar isPro={isPro} apiLimitCount={apiLimitCount} />
      {children}
    </div>
  );
};

export default DashboardLayout;
