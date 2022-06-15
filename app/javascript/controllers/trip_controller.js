import { Controller } from "stimulus"
import { csrfToken } from "@rails/ujs"

export default class extends Controller {
  static targets = ['button']
  static values = {
    id: Number
  }

  connect() {
  }

  start() {
    if ("geolocation" in navigator) {
      this.interval = setInterval(this.gps.bind(this), 10000)
    } else {
      alert("I'm sorry, but geolocation services are not supported by your browser.");
    }
  }

  stop() {
    clearInterval(this.interval)
  }

  async demoUpdate(location) {
    const url = `/itineraries/${this.idValue}/update_coordinates`
    const latitude = location.latitude
    const longitude = location.longitude
    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "application/json", "X-CSRF-Token": csrfToken(), "Content-Type": "application/json" },
      body: JSON.stringify({latitude: latitude, longitude: longitude})
    });
  };

  demo() {
    const demoData = [
      {latitude: -23.558507103834526 , longitude: -46.67898633245983},
      {latitude: -23.558341942145592, longitude: -46.67881951001335},
      {latitude: -23.558060299558274, longitude: -46.67834156478246},
      {latitude: -23.557799518846608, longitude: -46.67788637884827},
      {latitude: -23.557469195859426, longitude: -46.67735532854042},
      {latitude: -23.556937200253078, longitude: -46.676456336279315},
      {latitude: -23.55635999996823, longitude: -46.676429783762785},
      {latitude: -23.555821045620466, longitude: -46.67677875964565},
      {latitude: -23.55526122616918, longitude: -46.67719222022283},
      {latitude: -23.555250794728465, longitude: -46.6777270636955},
      {latitude: -23.555640193166862, longitude: -46.678308087498024},
      {latitude: -23.55609226162477, longitude: -46.67914221361076},
      {latitude: -23.55644622803091, longitude: -46.679733919547694},
      {latitude: -23.556698592526075, longitude: -46.68033896898438},
      {latitude: -23.55660845610295, longitude: -46.680400664980915},
      {latitude: -23.55651072318472, longitude: -46.68046906130632},
      {latitude: -23.556384915545337, longitude: -46.68055316148055},
      {latitude: -23.55616424766022, longitude: -46.68070135351895},
      {latitude: -23.55604991818489, longitude: -46.68077913759585},
      {latitude: -23.55594296472173, longitude: -46.680859603861045},
      {latitude: -23.55582986441313, longitude: -46.68093537626076},
      {latitude: -23.555713075941995, longitude: -46.681013830880886},
      {latitude: -23.555600590112473, longitude: -46.681094297146075},
      {latitude: -23.55549240692879, longitude: -46.681172081202426},
      {latitude: -23.55530554840767, longitude: -46.681302348013745},
      {latitude: -23.55526682366863, longitude: -46.68132447623667},
      {latitude: -23.555159254889183, longitude: -46.68140024863639},
      {latitude: -23.55506766768267, longitude: -46.68146328055369},
      {latitude: -23.554985300614632, longitude: -46.681520948043755},
      {latitude: -23.554883356040456, longitude: -46.68158536622481},
      {latitude: -23.55476718141589, longitude: -46.68166918525104},
      {latitude: -23.55468727288436, longitude: -46.68172484108447},
      {latitude: -23.554614125794714, longitude: -46.681773791408745},
      {latitude: -23.55452130884929, longitude:  -46.68183615276427},
      {latitude: -23.554473978328698, longitude: -46.681877727001286},
      {latitude: -23.554368867627133, longitude: -46.681939417812636},
      {latitude: -23.554237940149417, longitude: -46.682035977330855},
      {latitude: -23.554079966442757, longitude: -46.68214326569019},
      {latitude: -23.553930598132307, longitude: -46.68225055404936},
      {latitude: -23.553784917765373, longitude: -46.682357171855884},
      {latitude: -23.553657063133876, longitude: -46.682449708066166},
      {latitude: -23.553519988076975, longitude: -46.68249195285775},
      {latitude: -23.553379224756952, longitude: -46.682518104393935},
      {latitude: -23.553324517570545, longitude: -46.68269915350977},
      {latitude: -23.553234773154394, longitude: -46.68279973634126},
      {latitude: -23.553123514577468, longitude: -46.68292714127692},
      {latitude: -23.552993200544993, longitude: -46.68307868608553},
      {latitude: -23.552899767765314, longitude: -46.68318664499133},
      {latitude: -23.5527928117338, longitude: -46.68331539103076},
      {latitude: -23.552688929072836, longitude: -46.68343877263738},
      {latitude: -23.552620083710167, longitude: -46.683524603335755},
      {latitude: -23.55255062362392, longitude: -46.683612445675266},
      {latitude: -23.552462722754182, longitude: -46.683627868376085},
      {latitude: -23.552378509972847, longitude: -46.68355343707782},
      {latitude: -23.55230966445125, longitude: -46.683478335230305},
      {latitude: -23.552194102244655, longitude: -46.68336769411567},
      {latitude: -23.552014492500938, longitude: -46.68310539905946},
      {latitude: -23.551901508109115, longitude: -46.683034429646675},
      {latitude: -23.55176258714044, longitude: -46.68288556705607},
      {latitude: -23.551644565666344, longitude: -46.68277492592511},
      {latitude: -23.551507488514332, longitude: -46.6825784541276},
      {latitude: -23.5514583128153, longitude: -46.6825865007473},
      {latitude: -23.55135565849322, longitude: -46.682627404432104},
      {latitude: -23.551255462876416, longitude: -46.68266495536046},
      {latitude: -23.551158955373065, longitude: -46.68269915352316},
      {latitude: -23.55105998900218, longitude: -46.68273402224152},
      {latitude: -23.550962251958083, longitude: -46.682764867643165},
      {latitude: -23.550784727962498, longitude: -46.68281507663113},
      {latitude: -23.550721289875018, longitude: -46.6828667915797},
      {latitude: -23.55081103600795, longitude: -46.68300224313697},
      {latitude: -23.550871891227164, longitude: -46.68312897750465},
      {latitude: -23.55093459051446, longitude: -46.683258394081165},
      {latitude: -23.550941352203182, longitude: -46.683253029682696},
      {latitude: -23.55099913386987, longitude: -46.683367694110586},
      {latitude: -23.551051997925637, longitude: -46.68350649841805},
      {latitude: -23.551103632566306, longitude: -46.683621833427644},
      {latitude: -23.55114420262527, longitude: -46.683749908899735},
      {latitude: -23.551192763739998, longitude: -46.683904806460234},
      {latitude: -23.55122226922031, longitude: -46.684035564165036},
      {latitude: -23.551275133186365, longitude: -46.68420789608298},
      {latitude: -23.551320006071084, longitude: -46.68439028628408},
      {latitude: -23.551370411213426, longitude: -46.6845505482915},
      {latitude: -23.551415284065637, longitude: -46.684694717016626},
      {latitude: -23.551499497460608, longitude: -46.68481742807786},
      {latitude: -23.551489662322535, longitude: -46.68487710722453},
      {latitude: -23.55142388981572, longitude: -46.68496159682193},
      {latitude: -23.55140606361716, longitude: -46.68498908946254},
      {latitude: -23.551314473800236, longitude: -46.68508631953297},
      {latitude: -23.551224113314298, longitude: -46.68519830175203},
      {latitude: -23.55112514699153, longitude: -46.68531497785197},
      {latitude: -23.551016960122105, longitude: -46.685448417747146},
      {latitude: -23.550928443525315, longitude: -46.685553694453105},
      {latitude: -23.55086512953602, longitude: -46.68561940856968},
      {latitude: -23.550796897918797, longitude: -46.68571395643898},
      {latitude: -23.550750180756687, longitude: -46.6857769883467},
      {latitude: -23.55068748137832, longitude: -46.68585276075823},
      {latitude: -23.550582982353113, longitude: -46.6859727896038},
      {latitude: -23.5504889331562, longitude: -46.68607538410509},
      {latitude: -23.550390580986225, longitude: -46.686189377980774},
      {latitude: -23.550299605159392, longitude: -46.68629264303569},
      {latitude: -23.550204941060766, longitude: -46.686408648568005},
      {latitude: -23.550103179004772, longitude: -46.686551485405694},
      {latitude: -23.550014997951397, longitude: -46.686622554743394},
      {latitude: -23.549922177758294, longitude: -46.68673923082792},
      {latitude: -23.54978940173495, longitude: -46.68688876399187},
      {latitude: -23.549648634416968, longitude: -46.68705103763608},
      {latitude: -23.549544749268268, longitude: -46.68716905483343},
      {latitude: -23.549426725807777, longitude: -46.68728707202238},
      {latitude: -23.5493004524786, longitude: -46.68744836396654},
      {latitude: -23.549188575864825, longitude: -46.68756705171519},
      {latitude: -23.549189805278544, longitude: -46.68768573946524},
      {latitude: -23.549242055355283, longitude: -46.68779369837103},
      {latitude: -23.549292461293632, longitude: -46.68788355238547},
      {latitude: -23.5493391789738, longitude: -46.68797139472497},
      {latitude: -23.54935454662812, longitude: -46.6880069339921},
      {latitude: -23.549443064284556, longitude: -46.688162502122665},
      {latitude: -23.54949900249344, longitude: -46.68829862422128},
      {latitude: -23.54958444652702, longitude: -46.688467603395615},
      {latitude: -23.549651449361683, longitude: -46.68860640770307},
      {latitude: -23.54972951684414, longitude: -46.6887646580448},
      {latitude: -23.549840163588232, longitude: -46.689029526183326},
      {latitude: -23.549928680917414, longitude: -46.68923806793294},
      {latitude: -23.550003674718837, longitude: -46.68930244095141},
      {latitude: -23.550193003140034, longitude: -46.68948349005511},
      {latitude: -23.550274143810306, longitude: -46.68956261522321},
      {latitude: -23.55040015762879, longitude: -46.68963771707646},
      {latitude: -23.550540309438514, longitude: -46.68969203180546},
      {latitude: -23.550665708303377, longitude: -46.68974299377926},
      {latitude: -23.550784345353016, longitude: -46.68983217722754},
      {latitude: -23.55087839433832, longitude: -46.6899857336978},
      {latitude: -23.55095891988525, longitude: -46.69014063126565},
      {latitude: -23.551066492104084, longitude: -46.69030223436283},
      {latitude: -23.551161155584794, longitude: -46.690483954029325},
      {latitude: -23.551233075194737, longitude: -46.69061873502352},
      {latitude: -23.551352941127163, longitude: -46.69080850131449},
      {latitude: -23.551478953911225, longitude: -46.69101503140626},
      {latitude: -23.5515600937863, longitude: -46.69114377743825},
      {latitude: -23.5516467658699, longitude: -46.691292640035044},
      {latitude: -23.551746961186783, longitude: -46.69143747932621},
      {latitude: -23.551816421697726, longitude: -46.6915508026497},
      {latitude: -23.551893873200783, longitude: -46.69168491310666},
      {latitude: -23.551977471593915, longitude: -46.69165876157049},
      {latitude: -23.552077051966975, longitude: -46.69158433027138},
      {latitude: -23.552195073050154, longitude: -46.69150721676323},
      {latitude: -23.55235981063432, longitude: -46.69138919956789},
      {latitude: -23.552475874859844, longitude: -46.691296554989606},
      {latitude: -23.552629045496385, longitude: -46.69119473941158},
      {latitude: -23.55273108413364, longitude: -46.691124331429535},
      {latitude: -23.55281406730768, longitude: -46.69106733448542},
      {latitude: -23.552924711455983, longitude: -46.690995585395115},
      {latitude: -23.553072851531745, longitude: -46.69087488598921},
      {latitude: -23.553208697675075, longitude: -46.69079441972402},
      {latitude: -23.55330213024014, longitude: -46.69072200007334},
      {latitude: -23.553410315226717, longitude: -46.690644216017},
      {latitude: -23.553507435763827, longitude: -46.690577160795996},
      {latitude: -23.55349329796858, longitude: -46.6905235166192},
      {latitude: -23.553414003349697, longitude: -46.690381359550706},
      {latitude: -23.553363598991908, longitude: -46.69029955216515},
      {latitude: -23.553219762061644, longitude: -46.69006016500699},
      {latitude: -23.55310973285251, longitude: -46.68987241038822},
      {latitude: -23.552986180386153, longitude: -46.689653139786344},
      {latitude: -23.552867545325846, longitude: -46.68944459804907},
      {latitude: -23.552778415283758, longitude: -46.68930378206664},
      {latitude: -23.55270096430507, longitude: -46.68915827223708},
      {latitude: -23.55258294367396, longitude: -46.68896716483336},
      {latitude: -23.5525082, longitude: -46.6888568},
      {latitude: -23.55249073998561, longitude: -46.68880958506403},
      {latitude: -23.552415132912905, longitude: -46.6886862034574},
      {latitude: -23.552374563242157, longitude: -46.688688215101195},
      {latitude: -23.552305103026146, longitude: -46.68873247154705},
      {latitude: -23.55219999059409, longitude: -46.68880489118572},
      {latitude: -23.55206168462973, longitude: -46.688888039663546},
      {latitude: -23.55195288383912, longitude: -46.688975882003035},
      {latitude: -23.551825027422158, longitude: -46.6890576893791},
      {latitude: -23.55162534181393, longitude: -46.68939927413561}
    ]

    demoData.forEach((location, index) => {
      setTimeout(() => { this.demoUpdate(location) }, 1000 * index);
    });

  };

  startRouteHideButton() {
    this.demo()
    this.buttonTarget.classList.add('d-none')
  }


  gps() {
    const url = `/itineraries/${this.idValue}/update_coordinates`
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      fetch(url, {
        method: "PATCH",
        headers: { "Accept": "application/json", "X-CSRF-Token": csrfToken(), "Content-Type": "application/json" },
        body: JSON.stringify({latitude: latitude, longitude: longitude})
      })
    });
  }
}
