import { useState } from 'react'
import Data, { Data as DataType } from '../components/Data';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('What are you searcing for?');
  const [country, setCounty] = useState("us");
  const [data, setData] = useState(null);

  return (
    <>
      <div className='container'>
        <header className="under-border">John&apos;s Keyword Tool</header>
        <nav>
          <div>
            <h1 className="underline">Generate keyword ideas</h1>
            <p>Try entering a keyword or phrase related to your business or industry and explore the insights that the site provides. By understanding the questions and concerns of your audience, you can create content that is more relevant, valuable, and engaging. So go ahead and give it a try – you might just discover new opportunities to connect with your audience and drive more traffic to your website.</p>
          </div>
          <div className="search-form">
            <form onSubmit={e => e.preventDefault()}>


              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <select
                defaultValue={country}
                onChange={(e) => setCounty(e.target.value)}
                value={country}
              >
                <option value="us">🇺🇸 United States</option>
                <option value="gb">🇬🇧 United Kingdom</option>
                <option value="au">🇦🇺 Australia</option>
                <option value="br">🇧🇷 Brazil</option>
                <option value="fr">🇫🇷 France</option>
                <option value="de">🇩🇪 Germany</option>
                <option value="es">🇪🇸 Spain</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="nl">🇳🇱 Netherlands</option>
                <option value="pl">🇵🇱 Poland</option>
                <option value="it">🇮🇹 Italy</option>
                <option value="in">🇮🇳 India</option>
                <option disabled value="---------------">---------------</option>
                <option value="af">🇦🇫 Afghanistan</option>
                <option value="al">🇦🇱 Albania</option>
                <option value="dz">🇩🇿 Algeria</option>
                <option value="as">🇦🇸 American Samoa</option>
                <option value="ad">🇦🇩 Andorra</option>
                <option value="ao">🇦🇴 Angola</option>
                <option value="ai">🇦🇮 Anguilla</option>
                <option value="ag">🇦🇬 Antigua &amp; Barbuda</option>
                <option value="ar">🇦🇷 Argentina</option>
                <option value="am">🇦🇲 Armenia</option>
                <option value="au">🇦🇺 Australia</option>
                <option value="at">🇦🇹 Austria</option>
                <option value="az">🇦🇿 Azerbaijan</option>
                <option value="bs">🇧🇸 Bahamas</option>
                <option value="bh">🇧🇭 Bahrain</option>
                <option value="bd">🇧🇩 Bangladesh</option>
                <option value="be">🇧🇪 Belgium</option>
                <option value="bz">🇧🇿 Belize</option>
                <option value="bj">🇧🇯 Benin</option>
                <option value="bt">🇧🇹 Bhutan</option>
                <option value="bo">🇧🇴 Bolivia</option>
                <option value="ba">🇧🇦 Bosnia &amp; Herzegovina</option>
                <option value="bw">🇧🇼 Botswana</option>
                <option value="br">🇧🇷 Brazil</option>
                <option value="vg">🇻🇬 British Virgin Islands</option>
                <option value="bn">🇧🇳 Brunei</option>
                <option value="bg">🇧🇬 Bulgaria</option>
                <option value="bf">🇧🇫 Burkina Faso</option>
                <option value="bi">🇧🇮 Burundi</option>
                <option value="kh">🇰🇭 Cambodia</option>
                <option value="cm">🇨🇲 Cameroon</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="cv">🇨🇻 Cape Verde</option>
                <option value="cf">🇨🇫 Central African Republic</option>
                <option value="td">🇹🇩 Chad</option>
                <option value="cl">🇨🇱 Chile</option>
                <option value="co">🇨🇴 Colombia</option>
                <option value="cg">🇨🇬 Congo - Brazzaville</option>
                <option value="cd">🇨🇩 Congo - Kinshasa</option>
                <option value="ck">🇨🇰 Cook Islands</option>
                <option value="cr">🇨🇷 Costa Rica</option>
                <option value="ci">🇨🇮 Côte d’Ivoire</option>
                <option value="hr">🇭🇷 Croatia</option>
                <option value="cu">🇨🇺 Cuba</option>
                <option value="cy">🇨🇾 Cyprus</option>
                <option value="cz">🇨🇿 Czechia</option>
                <option value="dk">🇩🇰 Denmark</option>
                <option value="dj">🇩🇯 Djibouti</option>
                <option value="dm">🇩🇲 Dominica</option>
                <option value="do">🇩🇴 Dominican Republic</option>
                <option value="ec">🇪🇨 Ecuador</option>
                <option value="eg">🇪🇬 Egypt</option>
                <option value="sv">🇸🇻 El Salvador</option>
                <option value="ee">🇪🇪 Estonia</option>
                <option value="et">🇪🇹 Ethiopia</option>
                <option value="fj">🇫🇯 Fiji</option>
                <option value="fi">🇫🇮 Finland</option>
                <option value="fr">🇫🇷 France</option>
                <option value="ga">🇬🇦 Gabon</option>
                <option value="gm">🇬🇲 Gambia</option>
                <option value="ge">🇬🇪 Georgia</option>
                <option value="de">🇩🇪 Germany</option>
                <option value="gh">🇬🇭 Ghana</option>
                <option value="gi">🇬🇮 Gibraltar</option>
                <option value="gr">🇬🇷 Greece</option>
                <option value="gl">🇬🇱 Greenland</option>
                <option value="gp">🇬🇵 Guadeloupe</option>
                <option value="gt">🇬🇹 Guatemala</option>
                <option value="gg">🇬🇬 Guernsey</option>
                <option value="gy">🇬🇾 Guyana</option>
                <option value="ht">🇭🇹 Haiti</option>
                <option value="hn">🇭🇳 Hondurash</option>
                <option value="hk">🇭🇰 Hong Kong</option>
                <option value="hu">🇭🇺 Hungary</option>
                <option value="is">🇮🇸 Iceland</option>
                <option value="in">🇮🇳 India</option>
                <option value="id">🇮🇩 Indonesia</option>
                <option value="iq">🇮🇶 Iraq</option>
                <option value="ie">🇮🇪 Ireland</option>
                <option value="im">🇮🇲 Isle of Man</option>
                <option value="il">🇮🇱 Israel</option>
                <option value="it">🇮🇹 Italy</option>
                <option value="jm">🇯🇲 Jamaica</option>
                <option value="jp">🇯🇵 Japan</option>
                <option value="je">🇯🇪 Jersey</option>
                <option value="jo">🇯🇴 Jordan</option>
                <option value="kz">🇰🇿 Kazakhstan</option>
                <option value="ke">🇰🇪 Kenya</option>
                <option value="ki">🇰🇮 Kiribati</option>
                <option value="kw">🇰🇼 Kuwait</option>
                <option value="kg">🇰🇬 Kyrgyzstan</option>
                <option value="la">🇱🇦 Laos</option>
                <option value="lv">🇱🇻 Latvia</option>
                <option value="lb">🇱🇧 Lebanon</option>
                <option value="ls">🇱🇸 Lesotho</option>
                <option value="ly">🇱🇾 Libya</option>
                <option value="li">🇱🇮 Liechtenstein</option>
                <option value="lt">🇱🇹 Lithuania</option>
                <option value="lu">🇱🇺 Luxembourg</option>
                <option value="mg">🇲🇬 Madagascar</option>
                <option value="mw">🇲🇼 Malawi</option>
                <option value="my">🇲🇾 Malaysia</option>
                <option value="mv">🇲🇻 Maldives</option>
                <option value="ml">🇲🇱 Mali</option>
                <option value="mt">🇲🇹 Malta</option>
                <option value="mu">🇲🇺 Mauritius</option>
                <option value="mx">🇲🇽 Mexico</option>
                <option value="fm">🇫🇲 Micronesia</option>
                <option value="md">🇲🇩 Moldova</option>
                <option value="mn">🇲🇳 Mongolia</option>
                <option value="me">🇲🇪 Montenegro</option>
                <option value="ms">🇲🇸 Montserrat</option>
                <option value="ma">🇲🇦 Morocco</option>
                <option value="mz">🇲🇿 Mozambique</option>
                <option value="mm">🇲🇲 Myanmar (Burma)</option>
                <option value="na">🇳🇦 Namibia</option>
                <option value="nr">🇳🇷 Nauru</option>
                <option value="np">🇳🇵 Nepal</option>
                <option value="nl">🇳🇱 Netherlands</option>
                <option value="nz">🇳🇿 New Zealand</option>
                <option value="ni">🇳🇮 Nicaragua</option>
                <option value="ne">🇳🇪 Niger</option>
                <option value="ng">🇳🇬 Nigeria</option>
                <option value="nu">🇳🇺 Niue</option>
                <option value="nf">🇳🇫 Norfolk Island</option>
                <option value="mk">🇲🇰 North Macedonia</option>
                <option value="no">🇳🇴 Norway</option>
                <option value="om">🇴🇲 Oman</option>
                <option value="pk">🇵🇰 Pakistan</option>
                <option value="ps">🇵🇸 Palestine</option>
                <option value="pa">🇵🇦 Panama</option>
                <option value="pg">🇵🇬 Papua New Guinea</option>
                <option value="py">🇵🇾 Paraguay</option>
                <option value="pe">🇵🇪 Peru</option>
                <option value="ph">🇵🇭 Philippines</option>
                <option value="pn">🇵🇳 Pitcairn Islands</option>
                <option value="pl">🇵🇱 Poland</option>
                <option value="pt">🇵🇹 Portugal</option>
                <option value="pr">🇵🇷 Puerto Rico</option>
                <option value="qa">🇶🇦 Qatar</option>
                <option value="ro">🇷🇴 Romania</option>
                <option value="rw">🇷🇼 Rwanda</option>
                <option value="ws">🇼🇸 Samoa</option>
                <option value="sm">🇸🇲 San Marino</option>
                <option value="st">🇸🇹 São Tomé &amp; Príncipe</option>
                <option value="sa">🇸🇦 Saudi Arabia</option>
                <option value="sn">🇸🇳 Senegal</option>
                <option value="rs">🇷🇸 Serbia</option>
                <option value="sc">🇸🇨 Seychelles</option>
                <option value="sl">🇸🇱 Sierra Leone</option>
                <option value="sg">🇸🇬 Singapore</option>
                <option value="sk">🇸🇰 Slovakia</option>
                <option value="si">🇸🇮 Slovenia</option>
                <option value="sb">🇸🇧 Solomon Islands</option>
                <option value="so">🇸🇴 Somalia</option>
                <option value="za">🇿🇦 South Africa</option>
                <option value="kr">🇰🇷 South Korea</option>
                <option value="es">🇪🇸 Spain</option>
                <option value="lk">🇱🇰 Sri Lanka</option>
                <option value="sh">🇸🇭 St. Helena</option>
                <option value="vc">🇻🇨 St. Vincent &amp; Grenadines</option>
                <option value="sr">🇸🇷 Suriname</option>
                <option value="se">🇸🇪 Sweden</option>
                <option value="ch">🇨🇭 Switzerland</option>
                <option value="tw">🇹🇼 Taiwan</option>
                <option value="tj">🇹🇯 Tajikistan</option>
                <option value="tz">🇹🇿 Tanzania</option>
                <option value="th">🇹🇭 Thailand</option>
                <option value="tl">🇹🇱 Timor-Leste</option>
                <option value="tg">🇹🇬 Togo</option>
                <option value="tk">🇹🇰 Tokelau</option>
                <option value="to">🇹🇴 Tonga</option>
                <option value="tt">🇹🇹 Trinidad &amp; Tobago</option>
                <option value="tn">🇹🇳 Tunisia</option>
                <option value="tr">🇹🇷 Turkey</option>
                <option value="tm">🇹🇲 Turkmenistan</option>
                <option value="vi">🇻🇮 U.S. Virgin Islands</option>
                <option value="ug">🇺🇬 Uganda</option>
                <option value="ua">🇺🇦 Ukraine</option>
                <option value="ae">🇦🇪 United Arab Emirates</option>
                <option value="gb">🇬🇧 United Kingdom</option>
                <option value="us">🇺🇸 United States</option>
                <option value="uy">🇺🇾 Uruguay</option>
                <option value="uz">🇺🇿 Uzbekistan</option>
                <option value="vu">🇻🇺 Vanuatu</option>
                <option value="ve">🇻🇪 Venezuela</option>
                <option value="vn">🇻🇳 Vietnam</option>
                <option value="zm">🇿🇲 Zambia</option>
                <option value="zw">🇿🇼 Zimbabwe</option>
              </select>
              <button
                type="submit"
                placeholder="What are you searching for?"
                onClick={() => {
                  setData(null);
                  setIsLoading(true);
                  fetch(`/api/google?keyword=${keyword}&country=${country}&language=en`)
                    .then(i => i.json())
                    .then((i) => {
                      setData(i)
                      console.log(i)
                    })
                    .finally(() => setIsLoading(false))
                }
                }
              >Search</button>

            </form>
          </div>
        </nav>
        {isLoading && <h2>Is Loading....</h2>}
        {
          data && (
            <main>
              <Data data={data as DataType} />
            </main>
          )
        }
      </div>
      <footer className="upper-border">
        &copy; 2023 - Magnus Klein Ltd
      </footer>
    </>
  )
}
