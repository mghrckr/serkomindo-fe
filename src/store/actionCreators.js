
const BASE_URL = `http://${import.meta.env.VITE_BASE_URL}`

// const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEQl9OQU1FIjoib3RvbWF4IiwiREJfVVNFUiI6IndlYnVzZXIwMDEiLCJEQl9QQVNTIjoiVyNCdXNlcjAwMSIsIkRCX1NFUlZFUiI6IjE5Mi4xNjguMTI3Ljk0IiwiaWF0IjoxNzAyNDYwNzA1fQ.6cmlI_iPOdxJmYRFGw2q01o354HzncijNDfMBmpAWmk'
// const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEQl9OQU1FIjoibW9ubW9uIiwiREJfVVNFUiI6IndlYnVzZXIwMDEiLCJEQl9QQVNTIjoiVyNCdXNlcjAwMSIsIkRCX1NFUlZFUiI6IjE5Mi4xNjguMTI3Ljk0IiwiaWF0IjoxNzAyNTQ1OTEzfQ.c0oYsfp1IuCR9OQWODQi4fQHw0kPMm8vJyEPnQulzNg'


export const fetchUsers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/membertrx`, {
                method: "GET",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'users/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchSaldoMembers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/member/saldo`, {
                method: "GET",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'saldo/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchListProduk = (currentPage) => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/produk/list?page=${currentPage}`, {
                method: "GET",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'listProduk/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchInactiveMembers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/member/inactive`, {
                method: "GET",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'inactive/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchDepositMembers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/member/deposit`, {
                method: "GET",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'depositMembers/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchTrxs = (startDate, endDate) => {
    return async dispatch => {

        dispatch({ type: 'trxs/loading' });

        const formattedStartDate = startDate.split('-').join('');
        const formattedEndDate = endDate.split('-').join('');

        try {
            const response = await fetch(
                `${BASE_URL}/memberTotalTrxLabaSemua?startdate=${formattedStartDate}&enddate=${formattedEndDate}`,
                {
                    method: 'GET',
                    headers: {
                        "access_token": localStorage.getItem('access_token'),
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'trxs/get', payload: data });
            // console.log(data, 'ini data');
            localStorage.setItem('startLocal', JSON.stringify(startDate));
            localStorage.setItem('endLocal', JSON.stringify(endDate));
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchmemberTrxs = (memberId, startDate, endDate) => {
    return async dispatch => {
        const formattedStartDate = startDate.split('-').join('');
        const formattedEndDate = endDate.split('-').join('');

        try {
            const response = await fetch(
                `${BASE_URL}/membertrx?memberid=${memberId}&startdate=${formattedStartDate}&enddate=${formattedEndDate}`,
                {
                    method: 'GET',
                    headers: {
                        "access_token": localStorage.getItem('access_token'),
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'memberTrxs/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchLaba = (startDate, endDate) => {
    return async dispatch => {
        dispatch({ type: 'labas/loading' });
        const formattedStartDate = startDate.split('-').join('');
        const formattedEndDate = endDate.split('-').join('');

        try {
            const response = await fetch(
                `${BASE_URL}/memberTotalTrxLaba?startdate=${formattedStartDate}&enddate=${formattedEndDate}`,
                {
                    method: 'GET',
                    headers: {
                        "access_token": localStorage.getItem('access_token'),
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'labas/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchProdukTerjual = (startDate, endDate, pickedJenis, pickedOperator, pickedBerdasarkan) => {
    return async dispatch => {

        dispatch({ type: 'produktrxs/loading' });
        const formattedStartDate = startDate.split('-').join('');
        const formattedEndDate = endDate.split('-').join('');

        try {
            const response = await fetch(
                `${BASE_URL}/produktrx?startdate=${formattedStartDate}&enddate=${formattedEndDate}&jenis=${pickedJenis}&provider=${pickedOperator}&berdasarkan=${pickedBerdasarkan}`,
                {
                    method: 'GET',
                    headers: {
                        "access_token": localStorage.getItem('access_token'),
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'produktrxs/get', payload: data });
            localStorage.setItem('startLocal', JSON.stringify(startDate));
            localStorage.setItem('endLocal', JSON.stringify(endDate));
            localStorage.setItem('pickedOperatorLocal', pickedOperator);
            localStorage.setItem('pickedBerdasarkanLocal', pickedBerdasarkan);
            localStorage.setItem('pickedJenisLocal', pickedJenis);
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchModuleTrxs = (startDate, endDate, pickedOperator) => {
    return async dispatch => {

        dispatch({ type: 'moduleTrxs/loading' });
        const formattedStartDate = startDate.split('-').join('');
        const formattedEndDate = endDate.split('-').join('');

        try {
            const response = await fetch(
                `${BASE_URL}/moduletrx?startdate=${formattedStartDate}&enddate=${formattedEndDate}&kodeoperator=${pickedOperator}`,
                {
                    method: 'GET',
                    headers: {
                        "access_token": localStorage.getItem('access_token'),
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'moduleTrxs/get', payload: data });
            localStorage.setItem('startLocal', JSON.stringify(startDate));
            localStorage.setItem('endLocal', JSON.stringify(endDate));
            localStorage.setItem('pickedOperatorLocal', pickedOperator);
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchKodeOperators = (untungs) => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/kodeOperator`, {
                method: "GET",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'kodeOperators/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}
export const fetchLatestDates = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/latestDateTrx`, {
                method: "GET",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'latestDates/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}



export const loginUser = (DB_SERVER, DB_USER, DB_PASS, DB_NAME) => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/verifyconnection`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    DB_SERVER,
                    DB_USER,
                    DB_PASS,
                    DB_NAME
                }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }
            dispatch({
                type: 'user/login',
                payload: {
                    DB_SERVER,
                    DB_USER,
                    DB_PASS,
                    DB_NAME
                },
            });
            const data = await response.json();
            localStorage.setItem('access_token', data.msg.access_token)
            localStorage.setItem('access_server', data.msg.access_server)
            localStorage.setItem('access_db', data.msg.access_db)
            localStorage.setItem('access_user', data.msg.access_user)
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const setPickedOperator = (operator) => {
    return {
        type: 'SET_PICKED_OPERATOR',
        payload: operator,
    };
};

export const setPickedJenis = (jenis) => {
    return {
        type: 'SET_PICKED_JENIS',
        payload: jenis,
    };
};

export const setPickedBerdasarkan = (berdasarkan) => {
    return {
        type: 'SET_PICKED_BERDASARKAN',
        payload: berdasarkan,
    };
};
