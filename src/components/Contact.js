const Contact=()=>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact me at:</h1>
            <form className="text-center">
                <input type="text" className="rounded-sm border border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border rounded-sm border-black p-2 m-2" placeholder="messages"/>
                <input type="text" className="rounded-sm border border-black p-2 m-2" placeholder="feedback"/>
                <button className="border bg-gray-100 rounded-lg border-black p-2 m-2">Submit</button>
            </form>
            <h2 className="p-4 text-right ">Email:amisharaj015@gmail.com</h2>
        </div>
    )
};

export default Contact;