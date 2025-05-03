import React, { useState } from 'react'
import nacl from 'tweetnacl'
import { v4 as uuidv4 } from 'uuid'

const AetherSignup = () => {
  const [mode, setMode] = useState('none')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const handleGuestMode = () => {
    const guestKeypair = nacl.box.keyPair()
    sessionStorage.setItem('aether_guest', JSON.stringify({
      publicKey: Buffer.from(guestKeypair.publicKey).toString('hex'),
      secretKey: Buffer.from(guestKeypair.secretKey).toString('hex'),
    }))
    setMode('guest')
    // redirect to chat or dashboard
  }

  const handleCreateIdentity = () => {
    const keypair = nacl.box.keyPair()
    const id = uuidv4()
    const profile = {
      id,
      nickname,
      publicKey: Buffer.from(keypair.publicKey).toString('hex'),
      secretKey: Buffer.from(keypair.secretKey).toString('hex'),
      password,
    }
    localStorage.setItem('aether_profile', JSON.stringify(profile))
    setMode('identity')
    // redirect to chat or dashboard
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Aether</h1>
      <p className="mb-6 text-gray-400">Private. Peer-to-peer. No accounts.</p>

      {mode === 'none' && (
        <div className="space-y-4 flex flex-col gap-4 py-7">
          <button onClick={() => setMode('login')} className="bg-gray-700 px-4 py-3 rounded-xl cursor-pointer">Login</button>
          <button onClick={() => setMode('identity')} className="bg-gray-700 px-4 py-3 rounded-xl cursor-pointer">Sign Up</button>
          <button onClick={handleGuestMode} className="bg-gray-700 px-4 py-3 rounded-xl cursor-pointer">Continue as Guest</button>
        </div>
      )}

      {mode === 'identity' && (
        <div className="mt-6 space-y-4 w-full max-w-sm">
          <input
            type="text"
            placeholder="Nickname (optional)"
            className="w-full p-2 rounded text-white"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password to secure key (optional)"
            className="w-full p-2 rounded text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleCreateIdentity} className="bg-green-600 w-full py-2 rounded-xl cursor-pointer">Create</button>
          <button onClick={() => setMode('none')} className="text-sm text-gray-400 cursor-pointer">← Back</button>
        </div>
      )}

      {mode === 'guest' && (
        <p className="mt-6 text-green-400">Guest identity created. Welcome to Aether ✨</p>
      )}
    </div>
  )
}

export default AetherSignup
