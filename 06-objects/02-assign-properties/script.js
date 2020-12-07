(() => {
    const computers = [{
            id: "0001",
            available: false,
            user: "leny",
            os: "macOS"
        },
        {
            id: "0002",
            available: false,
            user: "Nicolas"
        },
        {
            id: "0003"
        },
        {
            id: "0004",
            os: "Windows"
        },
        {
            id: "0005"
        },
        {
            id: "0006",
            os: "macOS"
        },
        {
            id: "0007"
        },
        {
            id: "0008"
        },
        {
            id: "0009",
            available: false,
            user: "Anthony"
        },
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };


    document.getElementById("run").addEventListener("click", function () {


        for (let i = 0; i < computers.length; i++) {
            computers[i] = {
                ...defaultProps,
                ...computers[i]
            };
        };
        console.log(computers); 
    });

    // your code here
})();
