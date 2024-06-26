import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const to = searchParams.get('id');
    const name = searchParams.get('name');
    const [amount, setAmount] = useState(0);

    return <div class="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div class="flex flex-col space-y-1.5 p-6">
                <h2 class="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div class="p-6">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span class="text-2xl text-white">{name[0]}</span>
                    </div>
                    <h3 class="text-2xl font-semibold">{name}</h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    </div>
                    <button onClick={async () => {
                        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc2YzNiNzY2ZjcxZTk1MTljOTE1OGQiLCJpYXQiOjE3MTkzNDE0NDZ9.FENTbFgKzcLVB5XPyrxxei8TfFez_DVvnxxOB5L55YU')
                        const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {to, amount}, {headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }});
                        console.log("printing response", response);
                    }} class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}