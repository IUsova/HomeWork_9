'use strict';

const data = fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => {
        return response.json()
    })
    .then(({data}) => {
        console.log(data);
        return data
    })

    data.then(data => {
        console.log('........');
        console.log('Пункт №2');
        console.log('........');
        data.forEach((item) => {
            console.log(item?.last_name);
        })
    })

    data.then(data => {
        console.log('........');
        console.log('Пункт №3');
        console.log('........');
        const lastNameFilteredShort = data.filter((item) => {
            return (item?.last_name[0] === 'F');
        })
        console.log(lastNameFilteredShort)
    })

        data.then(data => {
            console.log('........');
            console.log('Пункт №4');
            console.log('........');
            const resultNameLastName = data.reduce((acc, item) => {
                acc = acc + item.first_name + ' ' + item.last_name + ',';
                return acc;
                }, []);
            console.log('Наша база содержит данные следующих пользователей:' + resultNameLastName);
        })

        data.then(data => {
            console.log('........');
            console.log('Пункт №5');
            console.log('........');
            Object.entries(data[0])?.forEach(([key]) => {
            console.log('Ключ:', key)
            })
        })
