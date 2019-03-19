function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, time);
    });
}

wait(1000).then(() => console.log("hello"));


function getLastCommitDate(name) {
    fetch('https://api.github.com/users/' + name + '/events', {headers: {'Authorization': 'e80216c779c50ba721f7daea6bee4af811627b9a'}}).then((response) => {
        const data = response.json().then((data) => {
            console.log(data[0].created_at);
        });
    });
}

getLastCommitDate('michaelflores3717');