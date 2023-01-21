import logo from "./logo.svg";
import "./App.css";
import axios from "./axios";
function App() {
  const getInfo = axios.get();
  return;
}

export default App;

//what you need
//redirect URI => https://eva.ai/
//url encode -> https%3A%2F%2Feva.ai%2F
//clien id => 78yggirirccizk
//clien secret => rLXKvmqg5AiAV78Z

//Authorization endpoint
//scope -> r_liteprofile
//https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=1&scope=r_liteprofile&client_id=78yggirirccizk&redirect_uri=https%3A%2F%2Feva.ai

//what we need from response
//https://eva.ai/?code=AQRc91oXHiZlJc_ilXIYmQmbXsiVdAVCqOJI_lfBjuQFQNZL9MJfEF0c5KsnFXgQHJrzVklTzT3JlTs2-GQc80UeAC0WTr9rUutlOpKVFYnWXhWP1l2QodrZv8NV_cnwlk7dxqc1iy_WlGoL-GloGkcBlaAFoT51oVgCtiwEn5zuT6Fcd_CCmnZCYZWG4ExTodnaTtlSX-sjl0JEkbc&state=1

// curl request
// curl -ik -X POST https://www.linkedin.com/oauth/v2/accessToken \
// -d grant_type=authorization_code \
// -d code=AQRc91oXHiZlJc_ilXIYmQmbXsiVdAVCqOJI_lfBjuQFQNZL9MJfEF0c5KsnFXgQHJrzVklTzT3JlTs2-GQc80UeAC0WTr9rUutlOpKVFYnWXhWP1l2QodrZv8NV_cnwlk7dxqc1iy_WlGoL-GloGkcBlaAFoT51oVgCtiwEn5zuT6Fcd_CCmnZCYZWG4ExTodnaTtlSX-sjl0JEkbc \
// -d redirect_uri=https%3A%2F%2Feva.ai \
// -d client_id=78yggirirccizk \
// -d client_secret=rLXKvmqg5AiAV78Z

//accessToken: AQXB43rKElRkisbF3OqAtTQ7xsimFwLlN6u6Q9RvzyYx6z9FxzX-vbKYX3fQDURZHsJjWwOUJ1ErsO4aGXiPvGpfY4sj_4sa2vjfxKnK6y8sHAwEwBQ3MhkCK1CCLVmFX0fqJdqSTbeMGqZm1TaKPywkpsdnJefAQgkFOYAkIHuWf4yFM3CnXq8z4dDI3YZmZ_PN8yA08fzywPKM5SzoqpHpnGo8WJadzOwRNwLsfRnHgDeol7mAK09SXnULEdsm1Y4LNMLxMDEUQzjphwSLGT9TSaIPwE0gC2KJa5ZKBeFhDuqIXdKFSmxS242AZuxbVqSXFj9KaWEChyNzzMuLNkR2VFy7ZA

//curl https://api.linkedin.com/v2/me/ -H  "Authorization: Bearer AQXB43rKElRkisbF3OqAtTQ7xsimFwLlN6u6Q9RvzyYx6z9FxzX-vbKYX3fQDURZHsJjWwOUJ1ErsO4aGXiPvGpfY4sj_4sa2vjfxKnK6y8sHAwEwBQ3MhkCK1CCLVmFX0fqJdqSTbeMGqZm1TaKPywkpsdnJefAQgkFOYAkIHuWf4yFM3CnXq8z4dDI3YZmZ_PN8yA08fzywPKM5SzoqpHpnGo8WJadzOwRNwLsfRnHgDeol7mAK09SXnULEdsm1Y4LNMLxMDEUQzjphwSLGT9TSaIPwE0gC2KJa5ZKBeFhDuqIXdKFSmxS242AZuxbVqSXFj9KaWEChyNzzMuLNkR2VFy7ZA"

// {"localizedLastName":"Poznyakov","profilePicture":{"displayImage":"urn:li:digitalmediaAsset:C4E03AQHvILiONQLE-A"},"firstName":{"localized":{"ru_RU":"Nikita"},"preferredLocale":{"country":"RU","language":"ru"}},"lastName":{"localized":{"ru_RU":"Poznyakov"},"preferredLocale":{"country":"RU","language":"ru"}},"id":"BnU81tRq6z","localizedFirstName":"Nikita"}%
