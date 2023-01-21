import type { PageServerLoad } from './$types';
export const load = (async ({ platform }) => {
    if (platform) {
        // const test_value = platform.env.test_kv.idFromName('test_key');
        try {
            const ps = platform?.env?.__D1_BETA__test1234.prepare('SELECT * from test_table');
            const data = await ps.first();
            const obj: { [key: string]: string } = {};
            // for (let [k, v] of Object.entries(platform?.env)) {
            //     obj[k] = v.toString();
            // }
            // obj["test1234_"] = platform?.env?.__D1_BETA__test1234?.toString();
            // obj["test_kv"] = platform?.env?.test_kv?.toString();
            obj["test_kv"] = data;
            return obj;

        } catch (error) {
            if (error instanceof Error) {
                return { e: error.message } //errorがErrorクラスである場合messageがフィールドに含まれることが保証されるので型安全
            } else if (typeof error === 'string') {
                return { e: error }
            } else {
                return { e: "unexpected error" }
            }

        }
        // return { "data": platform.toString(), "data2": platform?.env?.toString(), "data3": platform?.env?.test_kv?.toString() };
        // return {}
    }
    return {}
}) satisfies PageServerLoad;