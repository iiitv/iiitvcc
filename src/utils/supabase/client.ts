import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    detectSessionInUrl: true,
    flowType: "pkce",
  },
});

// import { createClient } from '@supabase/supabase-js'
// import { SupportedStorage } from '@supabase/supabase-js'

// // import AsyncStorage from '@react-native-async-storage/async-storage';

// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
// const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// function supportsLocalStorage() {
//     try {
//         return 'localStorage' in globalThis && globalThis.localStorage != null
//     } catch (e) {
//         return false
//     }
// }
// const customStorageAdapter: SupportedStorage = {
//     getItem: (key) => {
//     if (!supportsLocalStorage()) {
//         // Configure alternate storage
//         return null
//     }
//     return globalThis.localStorage.getItem(key)
//     },
//     setItem: (key, value) => {
//     if (!supportsLocalStorage()) {
//         // Configure alternate storage here
//         return
//     }
//     globalThis.localStorage.setItem(key, value)
//     },
//     removeItem: (key) => {
//     if (!supportsLocalStorage()) {
//         // Configure alternate storage here
//         return
//     }
//     globalThis.localStorage.removeItem(key)
//     },
// }

// export const supabase = createClient(
//     SUPABASE_URL as string,
//     SUPABASE_ANON_KEY as string,
//     {
//         auth: {
//             // storage: AsyncStorage,
//             storage: customStorageAdapter,
//             detectSessionInUrl: true,
//             flowType: 'pkce',
//         },
//     }
// )
