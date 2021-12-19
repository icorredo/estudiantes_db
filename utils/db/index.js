import admin from 'firebase-admin'

const serviceAccount = {
  type: 'service_account',
  project_id: 'rsef-test2-7247e',
  private_key_id: 'F72DDC4A91D755E57CDC1694264225301934290B',
  private_key: "-----BEGIN PRIVATE KEY-----\NMIIEVGIBADANBGKQHKIG9W0BAQEFAASCBKGWGGSKAGEAAOIBAQDAWVGVS1/NFAK1\N9QWEAHTPHSYEKFHW8DVRS8TIPZUVY1OY1VHHHEHZZYIJWLG1DGRGQIFA18GGSYTN\NONTM/DZ8NQWIKSB/4ZKUILJA6BAMA56UW+FN979FUX7YR7TXYCNZYMXSQ2KDETJ9\NXKKBN4CEUVD9GAW0QY/G7M5FW3T9Q6OOLIMUTVJDRMWDGLLVAJ8IDVKHNSCAGQSP\N9KAEPGVC2DWO1558DVOV9CCF8LDHT+X40/LCMIUT96AUJHERIAB8P0XKXQZPZUWO\NM8FWH6ZA/LNNMAITGJDZ86RNIX8PSQWTXUN6PENYA0BMIVQWC7QG30/SS0QLWZMQ\NY+CFHKSHAGMBAAECGGEAM0CABMO8VAE3XZI8BPXD1+OFZZSBZSECP7FT69BU5UPC\N3OMGPWANLVJIK8SD4FPS9MONXI0PNXGBRZVAS6SKVBNBO35I1ILB8VMVI0H5AHZE\NXNP854T5AFIVE4W5BMCOMWQDPDCGFZP+HQH4OKZLVBRCA3ZRA6F9/UTVRWBLPBYU\NHO//WCHI/C2O8LI8F61A9FXZT4DJKFYFZKRH07LCYXYQ8B1ODSIQ9MU4JA4YDJHN\NAKIAPTXTSGKUS1TPHVK8BXECXEJ8B8KJHVRPM8ULJIAQDX+WZ1OFQ8/RJ67Z+L22\NXCCKJGUFJ9QKFNCHOZTJCSEGZN8IB85EGULK49AAEWKBGQD0OEJSQASI6WQC4+VE\NPM7DVUVRXNSOPE2GG3CKWHPLZOKVQBBXNDBHIALKY6FO9LQGLVW1L6E/IJZ4J2TA\NA/ODQXDMMSGGLVI9BNXY3JRTAP87HFNMDHFUCB/WX7HFVJY72GYHZPZWGAZ9DMNN\NOS6L6XYO8L8AQF5FSKWAMFHPWWKBGQDJT6ZYIJCTRKGIMS1ECFPWABWOMMZYKXZ+\NNIZAUFC3+5KB+LYZP0A+UFL6AIRDGRRJZAN+4VM4QC6SG3KW2I3LZ6LRHWVDUI6I\NGBNKSB/XYXBJHUM+3QYEL75LJDEYG8ZD+BT8FLBCBV4+MWOLI11GYCMERCCE1VGO\N6C9CGDUPSWKBGQCG4L18PDZFIRGPD/LQVN2G/S/WKUN3O1VYGB+TUXZ9+3YZB7EQ\NOSBGWGTVT0LPYK573Z7MKELWNRYMHTZU0IQFQAB0JTLA6W3HDS7H5CRIHL0E5TBX\NSKMGE6LKTH8W60BRKRWY/FHU5DYK+KXIA3DHSR/5GQW9QBHRF24HTEEZPQKBGQC9\N//AVNUJFQMWLPTO/KHR1HBDPBMWEJLVXM8QONAQRRRKPNLFZWAZA7CEI1PWT40UK\N4N94QA6TKDI8AEXTTXRH2MG58JAPH4+BNI1KKF8WFZDOL2NRTCHHMJLJYCNU8XHK\N2RVQXAIPRL6Z9CNA0HQBKVISUIEPEUKAEY9ABZIX1QKBGGCZLQEF1WR4OWMVDLHW\N8MZNYI8AB1VG8+KXG0TNZRCPLH+6VFL5FOP7PQ0CIZFGHX1L5B6CG/013SLTEMEF\NZYNSPMJSYFM3NHLGLCUPDCROTEXNPI8HM+DBHSFMHUII2UGMCH4S7NR6J8ZB92T9\N0BWUR0VLWTYMRVDRMLGVU3CV\N-----END PRIVATE KEY-----\N",
  client_email: FIREBASE-ADMINSDK-3JIWH@RSEF-TEST2-7247E.IAM.GSERVICEACCOUNT.COM,
  client_id: 100493270288690950919,
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
