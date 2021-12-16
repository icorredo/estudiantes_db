import admin from 'firebase-admin'

const serviceAccount = {
  type: 'service_account',
  project_id: 'rsef-test2-7247e',
  private_key_id: 'f72ddc4a91d755e57cdc1694264225301934290b',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAwVGvS1/NFAk1\n9qWEAHtPHsYekFhW8DvrS8TIpZUVy1OY1VhHHeHZZYIJwLG1dGrgqIFA18GgsyTn\nONTm/dz8NQWIksB/4zKUILjA6BAMa56UW+FN979FuX7yr7tXYCnZYMXSQ2kdETJ9\nXKKBN4Ceuvd9GAW0Qy/G7m5FW3T9Q6OOLImutVjDRmWdgLlvAj8IDvKhNsCAGQSP\n9kAepgvc2dWo1558Dvov9ccF8LDht+x40/LCMiuT96AujHErIAB8p0xkxQzPzUWO\nM8Fwh6za/LnNmaiTgJDz86RNiX8PsQwTXun6PeNyA0BmIvQWc7qg30/Ss0qlwZMq\nY+CfHkshAgMBAAECggEAM0cabmo8Vae3XZI8bPXd1+oFZZsbzSECp7FT69bU5uPc\n3OMgpWanLvjIk8Sd4fpS9moNXI0pNxGBRzvAs6SkVbnbO35i1ILB8VMVI0h5AHze\nxnP854t5aFiVE4W5bmCoMWqDpdCGFZP+HQh4OKzlvBRcA3zRA6f9/UtvrWbLpBYU\nHo//wCHI/c2O8LI8F61a9fXzT4DJKFyfzkrh07lCyXYQ8B1oDsIq9MU4Ja4YDjHN\nAKIApTXtsgkus1TPHvK8bxeCxEj8b8kjHVrPM8ULjiaQdx+wZ1oFQ8/rJ67z+L22\nxCCKJgUfj9qkFNcHOzTjCSegzN8Ib85EGulK49aAEwKBgQD0oEJSqasi6wqC4+ve\npM7dvuvrxnsOPE2gg3CkwHPlZOkvqBBxNDBhIALKy6FO9LqGLvw1l6E/ijz4J2tA\na/ODqxdMMsgGlVI9bnxy3Jrtap87HFnMDHfUCB/WX7HFvJY72GyhzPZWgAz9DMNN\nos6l6XYo8L8AQF5fSkwaMfhPwwKBgQDJt6ZyIjctRKgIms1eCFPWABwOMmZYkXz+\nNIZAUFc3+5Kb+LYzP0a+ufl6AiRdGRRJzan+4vm4Qc6sg3KW2i3Lz6lrhwvdui6i\ngbNKSB/xyxBJhUM+3qyEL75LJDEyG8ZD+bt8flBcBv4+mWoLi11GYCMERCce1vgO\n6C9cGduPSwKBgQCg4l18PDZfirGpD/lqvn2G/S/wKuN3o1Vygb+tuxz9+3YZb7EQ\nosBGwGTVt0LpyK573Z7mKElWnrYmhtZU0iqfqAB0jtla6w3hdS7H5CrIhl0e5TBx\nsKmGe6lkth8W60brKRWY/FHu5dyk+KXiA3dhSr/5gQw9QBhRF24htEeZPQKBgQC9\n//AVnUjfqMWlpTo/khR1hBDpBmwEjLVxM8QonAQrRRkpNLFZwAZA7Cei1pWt40uK\n4N94qA6Tkdi8AexTTxrH2Mg58jApH4+Bni1kkF8WfzDOL2nRtChHMjlJycNU8Xhk\n2rvQXaIPrL6Z9CNA0HqBKViSUiePEukAEY9abzix1QKBgGcZLQEf1WR4OwmVdLHW\n8MZnyI8AB1vG8+Kxg0tNZRCPlH+6vfL5fop7pQ0CIzFGHX1L5B6Cg/013sLTeMEF\nZYnSPMJSyFM3nhlGLcuPdCROTExNPI8hm+dBhsfmhUii2UGmCh4S7NR6J8Zb92T9\n0bwUr0VlWTymRvdRMlGvu3CV\n-----END PRIVATE KEY-----\n,
  client_email: firebase-adminsdk-3jiwh@rsef-test2-7247e.iam.gserviceaccount.com',
  client_id: '100493270288690950919',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3jiwh%40rsef-test2-7247e.iam.gserviceaccount.com',
}

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://rsef-test2.firebaseio.com/',
    })
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack)
  }
}
export default admin.firestore()
