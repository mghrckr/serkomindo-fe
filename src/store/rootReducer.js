import { combineReducers } from "redux";


const operatorState = {
    operator: 'Semua Operator',
    loading: true
}

const listProdukState = {
    listProduk: [],
    loading: true
}

const depositMembersState = {
    depositMembers: [],
    loading: true
}

const jenisState = {
    jenis: ' Semua Jenis',
    loading: true
}

const berdasarkanState = {
    berdasarkan: 'Kode',
    loading: true
}
const produktrxsState = {
    produktrxs: [],
    loading: true
}

const memberTrxsState = {
    memberTrxs: [],
    loading: true
}

const usersState = {
    users: [],
    loading: true
}

const trxsState = {
    trxs: [],
    loading: true
}

const saldoMemberState = {
    saldo: [],
    loading: true
}

const inactiveMemberState = {
    inactive: [],
    loading: true
}

const labasState = {
    labas: [],
    loading: true
}

const moduleTrxsState = {
    moduleTrxs: [],
    loading: true
}

const kodeOperatorsState = {
    kodeOperators: [],
    loading: true
}

const latestDatesState = {
    latestDates: [],
    loading: true
}

const loginState = {
    loginDetails: {
        DB_SERVER: '',
        DB_USER: '',
        DB_PASS: '',
        DB_NAME: ''
    },
};

const usersReducer = (state = usersState, actions) => {
    switch (actions.type) {
        case 'users/get':
            return {
                ...state,
                users: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const depositMembersReducer = (state = depositMembersState, actions) => {
    switch (actions.type) {
        case 'depositMembers/get':
            return {
                ...state,
                depositMembers: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const listProdukReducer = (state = listProdukState, actions) => {
    switch (actions.type) {
        case 'listProduk/get':
            return {
                ...state,
                listProduk: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const saldoMemberReducer = (state = saldoMemberState, actions) => {
    switch (actions.type) {
        case 'saldo/get':
            return {
                ...state,
                saldo: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const inactiveMemberReducer = (state = inactiveMemberState, actions) => {
    switch (actions.type) {
        case 'inactive/get':
            return {
                ...state,
                inactive: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const trxsReducer = (state = trxsState, actions) => {
    switch (actions.type) {
        case 'trxs/loading':
            return {
                ...state,
                loading: true,
            };
        case 'trxs/get':
            return {
                ...state,
                trxs: actions.payload,
                loading: false,
            };
        default:
            return state;
    }
}

const labasReducer = (state = labasState, actions) => {
    switch (actions.type) {
        case 'labas/loading':
            return {
                ...state,
                loading: true,
            };
        case 'labas/get':
            return {
                ...state,
                labas: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const moduleTrxsReducer = (state = moduleTrxsState, actions) => {
    switch (actions.type) {
        case 'moduleTrxs/loading':
            return {
                ...state,
                loading: true, 
            };
        case 'moduleTrxs/get':
            return {
                ...state,
                moduleTrxs: actions.payload,
                loading: false, 
            };
        default:
            return state;
    }
}

const produktrxsReducer = (state = produktrxsState, actions) => {
    switch (actions.type) {
        case 'produktrxs/loading':
            return {
                ...state,
                loading: true,
            };
        case 'produktrxs/get':
            return {
                ...state,
                produktrxs: actions.payload,
                loading: false,
            };
        default:
            return state;
    }
}

const memberTrxsReducer = (state = memberTrxsState, actions) => {
    switch (actions.type) {
        case 'memberTrxs/get':
            return {
                ...state,
                memberTrxs: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const kodeOperatorsReducer = (state = kodeOperatorsState, actions) => {
    switch (actions.type) {
        case 'kodeOperators/get':
            return {
                ...state,
                kodeOperators: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const latestDatesReducer = (state = latestDatesState, actions) => {
    switch (actions.type) {
        case 'latestDates/get':
            return {
                ...state,
                latestDates: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}
const loginReducer = (state = loginState, actions) => {
    switch (actions.type) {
        case 'user/login':
            return {
                ...state,
                loginDetails: actions.payload,
            };
        default:
            return state;
    }
};

const pickedOperatorReducer = (state = operatorState, actions) => {
    switch (actions.type) {
        case 'SET_PICKED_OPERATOR':
            return {
                ...state,
                operator: actions.payload,
            }
        default:
            return state;
    }
};

const pickedJenisReducer = (state = jenisState, actions) => {
    switch (actions.type) {
        case 'SET_PICKED_JENIS':
            return {
                ...state,
                jenis: actions.payload,
            }
        default:
            return state;
    }
};

const pickedBerdasarkanReducer = (state = berdasarkanState, actions) => {
    switch (actions.type) {
        case 'SET_PICKED_BERDASARKAN':
            return {
                ...state,
                berdasarkan: actions.payload,
            }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    depositMembers : depositMembersReducer,
    listProduk : listProdukReducer,
    users: usersReducer,
    saldo: saldoMemberReducer,
    inactive: inactiveMemberReducer,
    trxs: trxsReducer,
    labas: labasReducer,
    kodeOperators: kodeOperatorsReducer,
    latestDates: latestDatesReducer,
    loginDetails: loginReducer,
    moduleTrxs: moduleTrxsReducer,
    operator: pickedOperatorReducer,
    memberTrxs: memberTrxsReducer,
    produktrxs: produktrxsReducer,
    jenis: pickedJenisReducer,
    berdasarkan: pickedBerdasarkanReducer
})

export default rootReducer