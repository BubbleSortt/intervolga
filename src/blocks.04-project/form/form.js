import 'select2';

const allSelects = $('.form__select');
const selectMark = $('.mark');
const selectModel = $('.model');
const selectMods = $('.mods');

// async function getModelList(mark) {
//   const url = `http://localhost:8080/stubs/${mark}.json`;
//   let response = await fetch(url, {
//     method: 'GET'
//   })
//   let modelList = await response.json()
//   return {
//     modelList: modelList,
//     getMods: async function () {
//       const url = `http://localhost:8080/stubs/${mark}.json`;
//       let response = await fetch(url, {
//         method: 'GET'
//       })
//
//       return await response.json()
//     }
//   }
// }

let settings = {
  currMark: '',
  currModel: '',
  currMods: '',
  getModelList: async function () {
    const url = `http://localhost:8080/stubs/${this.currMark}/model/modelList.json`;
    let response = await fetch(url, {
      method: 'GET'
    })
    return await response.json();
  },
  getMods: async function () {
    const url = `http://localhost:8080/stubs/${this.currMark}/mods/${this.currModel}.json`;
    let response = await fetch(url, {
      method: 'GET'
    })
    return await response.json();
  }
}


let marks = [
  {
    "id": "mercedes",
    "text": "mercedes"
  },
  {
    "id": "lada",
    "text": "lada"
  },
  {
    "id": "bmw",
    "text": "bmw"
  },
  {
    "id": "tesla",
    "text": "tesla"
  }
]


allSelects.select2({
  width: '30%',
  minimumResultsForSearch: Infinity,
  disabled: true
});

selectMark.select2({
  data: marks,
  width: '30%',
  minimumResultsForSearch: Infinity,
  disabled: false
})


selectMark.on('select2:select', async function (e) {
  clearSelect(selectMods);
  if (this.value === '-1') {
    clearSelect(selectModel)
    return
  }

  settings.currMark = this.value;
  let model = (await settings.getModelList()).model;
  selectModel.empty();
  selectModel.select2({
    width: '30%',
    minimumResultsForSearch: Infinity,
    data: model,
    disabled: false
  })
});

selectModel.on('select2:select', async function (e) {
  if (this.value === '-1') {
    clearSelect(selectMods);
    return
  }
  settings.currModel = this.value;
  let mods = (await settings.getMods());
  mods = mods.[settings.currModel];
  selectMods.empty()
  selectMods.select2({
    minimumResultsForSearch: Infinity,
    width: '30%',
    data: mods,
    disabled: false
  })

});

function clearSelect(select) {

  select.empty();
  select.select2({
    disabled: true,
    width: '30%',
    minimumResultsForSearch: Infinity,
    data: [
      {
        "id": -1,
        "text": "Не выбрано"
      }
    ]
  })
}