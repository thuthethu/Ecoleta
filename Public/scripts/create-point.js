function populateUFs() {
    const UFselect = document.querySelector("select[name=uf]")

    fetch ("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for( const state of states) {
            UFselect.innerHTML += `<option value="${state.id}"> ${state.nome} </option>`
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const UFValue = event.target.value

    citySelect.innerHTML = "<option value> Selecione a Cidade</option>"
    citySelect.disabled = true

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UFValue}/municipios`

    fetch (url)
    .then( res => res.json() )
    .then( cities => {
        for( const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}"> ${city.nome} </option>`
        }
        citySelect.disabled = false
    })
}


document.querySelector("select[name=uf]").addEventListener("change", getCities )


// colected items

const ItemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of ItemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const colectedItems= document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    itemLi.classList.toggle("selected")
    const itemId = event.target.dataset.id


    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })

    if (alreadySelected >= 0) {
        const filtereditems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filtereditems
    } else {
        selectedItems.push(itemId)
    }


    colectedItems.value = selectedItems
}