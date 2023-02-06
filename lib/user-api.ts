/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import crypto from 'crypto';

export async function createDid(keyType: string, didType: string) {
  console.log(keyType, didType);
  return await fetch('http://localhost:8080/v1/dids/key', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      keyType: keyType,
      didType: didType
    })
  });
}

export async function createSchema(issuerDid: string) {
  console.log(issuerDid);
  return await fetch('http://localhost:8080/v1/schemas', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author: issuerDid
    })
  });
}

export async function validateCredential(issuerDid: string, subjectDid?: string, schemaID?: string) {
  return await fetch('http://localhost:8080/v1/credentials', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        givenName: 'Alice',
        employedAt: '2022-08-20T13:20:10.000+0000'
      },
      issuer: issuerDid,
      subject: 'did:key:z6MkqcFHFXqzsYyDYrEUA2pVCfQGJz2rYoCZy5WWszzSW3o6',
      '@context': 'https://www.w3.org/2018/credentials/v1',
      expiry: '2051-10-05T14:48:00.000Z',
      schema: 'b28feb61-e0b8-454a-86ed-d487a46e8584'
    })
  });
}

export async function register(email: string, token?: string) {
  return await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, token })
  });
}

export async function saveGithubToken({ id, token }: { id?: string; token: string }) {
  return await fetch('/api/save-github-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      token
    })
  });
}

export function emailToId(email: string) {
  if (process.env.EMAIL_TO_ID_SECRET) {
    const hmac = crypto.createHmac('sha1', process.env.EMAIL_TO_ID_SECRET);
    hmac.update(email);
    const result = hmac.digest('hex');
    return result;
  } else {
    throw new Error('EMAIL_TO_ID_SECRET is missing');
  }
}
