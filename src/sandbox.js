
{!isLoading && !isLoadingWithDates && submitted && storedTrxs && storedUntungs && !trxs && !untungs && (
    <div className="relative overflow-auto shadow-md sm:rounded-lg" style={{ maxHeight: '600px' }}>
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Jml TRX</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Depency Ratio</th>
                    {storedUntungs.map((untung, index) => (
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" key={index}>{untung}</th>
                    ))}
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody>
                {storedTrxs.map((trx, index) => {
                    const memberId = trx.kode
                    let ratioDep = totalLabaAwal !== 0 ? (trx.labaawal / totalLabaAwal).toFixed(2) * 100 : 0;
                    return (
                        <tr key={index}>
                            <td style={{ color: 'black' }}>{index + 1}</td>
                            <td style={{ color: 'black' }}>{trx.kode}</td>
                            <td style={{ color: 'black' }}>{trx.nama}</td>
                            <td style={{ color: 'black' }}>{formatNumber(trx.totaltrx)}</td>
                            <td style={{ color: 'black' }}>{formatPercentage(ratioDep)}</td>
                            <td style={{ color: 'black' }}>{formatNumber(trx.labaawal)}</td>
                            {filteredUntungsStored.map((operator, operatorIndex) => (
                                <td key={operatorIndex} style={{ color: 'black' }}>
                                    {formatNumber(trx.OperatorKode[operator])}
                                </td>
                            ))}
                            {/* <td style={{ color: 'black' }}>{<ModalProduk memberId={memberId} startDate={startDate} endDate={endDate} />}</td> */}
                            <button onClick={(e) => {
                                e.preventDefault()
                                dispatch(fetchmemberTrxs(memberId, startDate, endDate))
                                navigate(`/cek/${memberId}/${startDate}/${endDate}`)
                            }}
                                type="button" className="mt-2 text-white bg-gradient-to-r from-brown-400 via-brown-500 to-brown-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-brown-300 dark:focus:ring-brown-800 shadow-lg shadow-brown-500/50 dark:shadow-lg dark:shadow-brown-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Cek Produk
                            </button>
                        </tr>
                    );
                })}
                <tr>
                    <td> </td>
                    <td></td>
                    <td style={{ fontWeight: 'bold', color: 'black' }}> TOTAL</td>
                    <td style={{ fontWeight: 'bold', color: 'black' }}>{formatNumber(totalJmlTrx)}</td>
                    <td style={{ fontWeight: 'bold', color: 'black' }}>{submitted ? 100 : 0}%</td>
                    <td style={{ fontWeight: 'bold', color: 'black' }}>{formatNumber(totalLabaAwal)}</td>
                    {filteredUntungsStored.map((operator) => (
                        <td style={{ fontWeight: 'bold', color: 'black' }} key={operator}>{formatNumber(totalOperators[operator])}</td>
                    ))}
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
)}
