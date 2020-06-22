

import { db } from "../plugins/firebase";
var cookieparser = require('cookieparser');

export const state = () => ({
    userEmail: null,
})

export const mutations = {
    setUser(state, payload) {
        state.userEmail = payload.Email;    }
}

export const actions = {
    nuxtServerInit(vuexContext, context){
        return new Promise(async (resolve, reject) => {
            if (context.req.headers.cookie) {
                const parsed = cookieparser.parse(context.req.headers.cookie);
                const uid = parsed.uid
                if(uid){
                    const userSnap = await db.collection("Users").doc(uid).get();
                    const userData = userSnap.data(); 
                    vuexContext.commit('setUser', userData);
                }        
                
            }
            resolve()
        })
    },
}

export const gatters = {
    loadUser(state){
        return state
    }
}