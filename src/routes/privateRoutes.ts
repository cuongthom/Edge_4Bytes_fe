import AuditLogsPage from "../pages/account/AuditLogsPage";
import BillingPage from "../pages/account/BillingPage";
import CostExplorer from "../pages/account/CostExplorer";
import HistoryPage from "../pages/account/HistoryPage";
import TeamsPage from "../pages/account/TeamsPage";
import DocumentPage from "../pages/documents/DocumentPage";
import DocumentPostgresPage from "../pages/documents/DocumentPostgresPage";
import DocumentRedisPage from "../pages/documents/DocumentRedisPage";
import PostGresPage from "../pages/postGres/PostGresPage";
import PostgresIdPage from "../pages/postGres/detailPostgres/PostgresIdPage";
import RedisIdPage from "../pages/redis/detailRedis/RedisIdPage";
import RedisPage from "../pages/redis/RedisPage";


const privateRoutes = {
 
  redis: {
    path: '/redis',
    component: RedisPage,
    requiredLogin: true,
  },
  redisId: {
    path: '/redis/:id',
    component: RedisIdPage,
    requiredLogin: true,
    getPath: (id: string) => `/redis/${id}`,
  },
  postgres: {
    path: '/postgres',
    component: PostGresPage,
    requiredLogin: true,
  },
  postgresId: {
    path: '/postgres/:id',
    component: PostgresIdPage,
    requiredLogin: true,
    getPath: (id: string) => `/postgres/${id}`,
  },
  teams: {
    path: '/account/teams',
    component: TeamsPage,
    requiredLogin: true,
  },
  auditLogs: {
    path: '/account/audit-logs',
    component: AuditLogsPage,
    requiredLogin: true,
  },
  billing: {
    path: '/account/billing',
    component: BillingPage,
    requiredLogin: true,
  },
  costExplorer: {
    path: '/account/cost-explorer',
    component: CostExplorer,
    requiredLogin: true,
  },
  history: {
    path: '/account/history',
    component: HistoryPage,
    requiredLogin: true,
  },
  document: {
    path: '/documents',
    component: DocumentPage,
    requiredLogin: true,
  },
  documentRedis: {
    path: '/documents/redis',
    component: DocumentRedisPage,
    requiredLogin: true,
  },
  documentPostgres: {
    path: '/documents/postgres',
    component: DocumentPostgresPage,
    requiredLogin: true,
  },

}
export default privateRoutes;