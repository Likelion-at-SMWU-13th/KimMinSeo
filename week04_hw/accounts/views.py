from django.shortcuts import render, redirect
from .forms import SignupForm
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout

def signup(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("login")
    else:
        form = SignupForm()

    return render(request, "signup.html", {"form":form})

# Create your views here.
