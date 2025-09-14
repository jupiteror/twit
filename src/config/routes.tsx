import type {RoutesType, RouteType} from '@/shared/types/routes.type.ts';
import { PATHS } from '@/shared/constants/paths.ts';
import { lazy } from 'react';
import UnregisteredLayout from '@/features/layout/un-layout.tsx';
import Layout from '@/features/layout/un-layout.tsx'


const PAGE = {
    HOME: lazy(() => import('@/pages/home.tsx')),
    REGISTRATION: lazy(()=> import('@/pages/registration.tsx'))
} as const;

const unknown: RouteType[] = [
    {
        path: '*',
        element: <PAGE.REGISTRATION />,
        layout: UnregisteredLayout,
    },
    {
        path: PATHS.SIGN_UP,
        element: <PAGE.REGISTRATION />,
        layout: UnregisteredLayout,
    },
];

const user: RouteType[] = [
    {
        path: '*',
        element: <PAGE.HOME />,
        layout: Layout,
    }
];

export const ROUTES: RoutesType = {
    unknown,
    user,
};