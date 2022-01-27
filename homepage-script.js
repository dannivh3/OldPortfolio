document.addEventListener("DOMContentLoaded", function()
{
    document.querySelector("#diploma").style.backgroundColor = "#7C7894";
    document.querySelector("#harward").addEventListener("click", function()
    {
        document.querySelector("#harward").style.backgroundColor = "#7C7894";
        document.querySelector("#diploma").style.backgroundColor = "#1D183C";
        document.querySelector("#free-code-camp").style.backgroundColor = "#1D183C";
        document.querySelector("#general").style.backgroundColor = "#1D183C";

    });
    document.querySelector("#diploma").addEventListener("click", function()
    {
        document.querySelector("#harward").style.backgroundColor = "#1D183C";
        document.querySelector("#diploma").style.backgroundColor = "#7C7894";
        document.querySelector("#free-code-camp").style.backgroundColor = "#1D183C";
        document.querySelector("#general").style.backgroundColor = "#1D183C";

    });
    document.querySelector("#free-code-camp").addEventListener("click", function()
    {
        document.querySelector("#harward").style.backgroundColor = "#1D183C";
        document.querySelector("#diploma").style.backgroundColor = "#1D183C";
        document.querySelector("#free-code-camp").style.backgroundColor = "#7C7894";
        document.querySelector("#general").style.backgroundColor = "#1D183C";

    });
    document.querySelector("#general").addEventListener("click", function()
    {
        document.querySelector("#harward").style.backgroundColor = "#1D183C";
        document.querySelector("#diploma").style.backgroundColor = "#1D183C";
        document.querySelector("#free-code-camp").style.backgroundColor = "#1D183C";
        document.querySelector("#general").style.backgroundColor = "#7C7894";

    });
});