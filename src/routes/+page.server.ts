import type { PageServerLoad } from './$types';
export const load = (async ({ platform }) => {
    if (platform) {
        // const test_value = platform.env.test_kv.idFromName('test_key');
        // const ps = platform.env.NORTHWIND_DB.prepare('SELECT * from users');
        // const data = await ps.first();
        return platform?.env;
        // return { "data": platform.toString(), "data2": platform?.env?.toString(), "data3": platform?.env?.test_kv?.toString() };
        // return {}
    }
    return {}
}) satisfies PageServerLoad;