'use client'

import { useState } from 'react'
import { addressService } from '@/lib/services/AddressService'
import { Address } from '@/types/address'
import { MapPin, RefreshCcw } from 'lucide-react'

export default function TestAddresses() {
  const [addresses, setAddresses] = useState<Address[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAddresses = async () => {
    setLoading(true)
    setError(null)

    try {
      console.log('Fazendo requisição para: http://localhost:8080/addresses')
      const data = await addressService.getAll()
      setAddresses(data)
      console.log('Endereços carregados:', data)
    } catch (err: any) {
      console.error('Erro detalhado:', {
        message: err.message,
        status: err.response?.status,
        statusText: err.response?.statusText,
        data: err.response?.data,
        url: err.config?.url
      })
      setError(
        `Erro ${err.response?.status || 'desconhecido'}: ${err.response?.data?.message || err.message}`
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-amber-500">AedesControl</span> - Endereços
          </h1>
          <button
            onClick={fetchAddresses}
            disabled={loading}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white shadow-sm transition
              ${loading
                ? 'bg-amber-400 cursor-not-allowed'
                : 'bg-amber-500 hover:bg-amber-600'}
            `}
          >
            <RefreshCcw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Carregando...' : 'Carregar'}
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 rounded-lg">
            <strong>Erro:</strong> {error}
          </div>
        )}

        <div className="space-y-4">
          {addresses.length === 0 && !loading ? (
            <p className="text-gray-500 text-center">Nenhum endereço encontrado</p>
          ) : (
            addresses.map((address) => (
              <div
                key={address.id}
                className="p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    {address.street}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${address.status === 'LIVRE'
                        ? 'bg-green-100 text-green-800'
                        : address.status === 'SUSPEITA'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'}
                    `}
                  >
                    {address.status}
                  </span>
                </div>

                <p className="text-gray-600">
                  {address.city} - {address.zipCode}
                </p>

                {address.latitude && address.longitude && (
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="font-medium">Lat:</span> {address.latitude},&nbsp;
                    <span className="font-medium">Lng:</span> {address.longitude}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
