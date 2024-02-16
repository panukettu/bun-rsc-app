import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react/server';

export const getQueryClient = cache(() => new QueryClient({ defaultOptions: { queries: { staleTime: 30000 } } }));
