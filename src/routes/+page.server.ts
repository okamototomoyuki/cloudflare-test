import { D1Database } from '../core/D1Database';
import type { PageServerLoad } from './$types';
export const load = (async ({ platform }) => {
    if (platform) {
        // const test_value = platform.env.test_kv.idFromName('test_key');
        try {
            const obj: { [key: string]: string } = {};
            const res = await platform?.env?.__D1_BETA__test1234.fetch("/query", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: {
                    sql: 'SELECT * from test_table',
                    params: {},
                }
            });

            // if (platform?.env?.__D1_BETA__test1234) {
            //     const e = platform.env.__D1_BETA__test1234;
            //     if (e) {
            //         if (e.prepare) {
            //             platform.env.test1234 = e;
            //         } else {
            //             platform.env.test1234 = new D1Database(e);
            //         }
            //     }
            // }
            // const ps = platform?.env?.test1234.prepare('SELECT * from test_table');
            // obj["ps"] = ps.toString();
            // obj["test_kv"] = ps;
            // const data = await ps.first();
            // obj["___"] = platform?.env?.__D1_BETA__test1234.constructor?.toString();
            // obj["___2"] = platform?.env?.__D1_BETA__test1234.toString();
            // obj["___3"] = platform?.env?.__D1_BETA__test1234("sdfsda");
            // obj["___2"] = data;
            // for (let [k, v] of Object.getOwnPropertyNames(platform?.env)) {
            //     obj[k] = v.toString();
            // }
            // obj["test1234_"] = platform?.env?.__D1_BETA__test1234?.toString();
            // obj["test_kv"] = platform?.env?.test_kv?.toString();
            obj["test_kv"] = res;
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