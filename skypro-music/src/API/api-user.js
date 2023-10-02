export async function registerUser({ email, password, username}) {
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            username
        }),
    headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    "content-type": "application/json",
    },
    })

    if (response.status === 400) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }


    if (response.status === 500) {
        throw new Error('Сервер сломался. Попробуй позже');
    }

    const data = await response.json();
    return data;
}

export const loginUser = async ({ email, password }) => {
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/login/', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            "content-type": "application/json",
        },
    })

    if (response.status === 401 || response.status === 400) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }


    if (response.status === 500) {
        throw new Error('Сервер сломался. Попробуй позже');
    }

    const data = await response.json();
    return data;
}