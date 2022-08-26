
import { subscribeToHellfireClub } from "../firebase/hellfire-club.js"


const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // Salvar no banco de dados
    const subscriptionId = await subscribeToHellfireClub(subscription)

    // Para limpar o formulário depois do envio
    txtName.value = ""
    txtEmail.value = ""
    txtLevel.value = ""
    txtCharacter.value = ""
    //Mensagem de que foi enviado com sucesso
    alert(`Inscrição ${subscriptionId} adicionada com sucesso!`)
    }
)

