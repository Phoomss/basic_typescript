export const asyncAwait = async () => {
    async function getUserData(){
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error + "Failed to fetch user data")
        }
    }

    // getUserData()

    interface User{
        id: number;
        name: string;
        email: string;
    }

    async function getUserDataWithType(): Promise<User>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            const data: User = await response.json()
            console.log(data)
            return data
        } catch (error) {
            console.log(error + "Failed to fetch user data")

        }
    }

    getUserDataWithType()
}