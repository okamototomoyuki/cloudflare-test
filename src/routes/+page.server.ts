import type { PageServerLoad } from './$types';
export const load = (async ({ platform }) => {
    if (platform) {
        // const test_value = platform.env.test_kv.idFromName('test_key');
        // const ps = platform.env.NORTHWIND_DB.prepare('SELECT * from users');
        // const data = await ps.first();
        // return { test_value };
        return {}
    }
    return {}
}) satisfies PageServerLoad;