//   async await

async function first() {
    let url = "https://api.escuelajs.co/api/v1/products";
    await fetch(url)
        .then((Response) => Response.json())

        .then((first) => {
          setTimeout(() => {
                console.log(first);
            }, 8000);
        })
        .catch((error) => {
            console.log("error", error);
        });


    let url2 = "http://universities.hipolabs.com/search?country=United+States&quot";
    await fetch(url2)
        .then((Response) => Response.json())

        .then((second) => {
            setTimeout(() => {
                console.log(second);
            }, 5000);
        })
        .catch((error) => {
            console.log("error", error);
        });


    let url3 = "https://fakestoreapi.com/products";
    await fetch(url3)
        .then((Response) => Response.json())

        .then((third) => {
            console.log(third);
        })
        .catch((error) => {
            console.log("error", error);
        });

}
first();
console.log("last");