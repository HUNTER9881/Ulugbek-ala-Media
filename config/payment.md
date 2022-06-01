 const payme = () => {
        axios.get('/api/user/me').then((Response) => {
            const uid = Response.data.user.uid
            const userID = Response.data.user._id
            const osonToken = Response.data.osonToken
            const merchant_id = document.getElementById('merchant_id').value
            const amount = document.getElementById('amount').value
            const account = document.getElementById('account').value
            const currency = document.getElementById('currency').value
            const comment = document.getElementById('comment').value
            const return_url = document.getElementById('return_url').value
            const lang = document.getElementById('lang').value
            axios.post('/api/invoice/create', {
                user_account: amount,
                merchant_id: merchant_id,
                amount: amount,
                currency: currency,
                comment: comment,
                return_url: `https://burchakacademy.uz/`,
                lifetime: 30,
                lang: lang,
            }).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
        })
    }