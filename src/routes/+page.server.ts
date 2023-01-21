import type { PageServerLoad } from './$types';
export const load = (async ({ platform }) => {
    if (platform) {
        // const test_value = platform.env.test_kv.idFromName('test_key');
        try {
            const ps = platform?.env?.test1234.prepare('SELECT * from test_table');
            const data = await ps.first();
            const obj: { [key: string]: string } = {};
            // for (let [k, v] of Object.entries(platform?.env)) {
            //     obj[k] = v.toString();
            // }
            obj["test1234"] = data;
            // obj["test_kv"] = platform?.env?.test_kv?.toString();
            return obj;

        } catch (e) {
            return { error: e };

        }
        // return { "data": platform.toString(), "data2": platform?.env?.toString(), "data3": platform?.env?.test_kv?.toString() };
        // return {}
    }
    return {}
}) satisfies PageServerLoad;