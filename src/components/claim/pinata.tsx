const key = '7d6fabf0f84dd1bc523b';
const secret =
  'a6e376c34e6ac5fbec899b04164b3fe2eafefd8a351de526276b7f12e76d8d72';
const axios = require('axios');

const pinJSONToIPFS = async (JSONBody: any) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response: any) {
      return {
        success: true,
        pinataUrl:
          'https://gateway.pinata.cloud/ipfs/' + response.data.IpfsHash,
      };
    })
    .catch(function (error: any) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};

export default pinJSONToIPFS;
