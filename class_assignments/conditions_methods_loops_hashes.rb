# def till_twenty (count)
#     x = 1
#     y = 20
#     count.times do
#         p x
#         x = x + 1
#     end
#     count.times do
#         p y
#         y = y - 1
#     end
# end
# till_twenty(20)
##########################################################################

# def number_check (num)
#     if num > 0 && num <= 10
#         p "Valid"
#     else
#         p "Not Valid"
#     end
# end
# number_check(6)
# number_check(16)
# number_check(10)

##########################################################################
#
# def fizzbuzz (num)
#     100.times do
#         if num == 0
#             p 0
#             num = num + 1
#         elsif num % 15 == 0
#             p "fizzbuzz"
#             num = num + 1
#         elsif num % 5 == 0
#             p "buzz"
#             num = num + 1
#         elsif num % 3 == 0
#             p "fizz"
#             num = num + 1
#         else
#             p num
#             num = num + 1
#         end
#     end
# end
# fizzbuzz(0)

##########################################################################

# def sum (num1, num2)
#     p num1 + num2
# end
#
# sum(5,5)
# sum(5,4)
# sum(5,6)
# sum(5,9)

##########################################################################

# def evens (num)
#     if num % 2 == 0
#         p "even"
#     else
#         p "odd"
#     end
# end
# evens(1)
# evens(2)
# evens(5)
# evens(4)
# evens(9)
# evens(7)

##########################################################################

# words = ["hello", "world", "look", "at", "me", "now"]
# def allcaps (arr)
#     arr.map { |e| e.upcase  }
# end
#
# p allcaps(words)

##########################################################################

# def user_input()
#     rock = "rock"
#     paper = "paper"
#     scissor = "scissor"
#     p "Player 1:"
#     inputOne = gets.chomp.downcase # <- allow for capitalization in user input
#     p "Player 2:"
#     inputTwo = gets.chomp.downcase
#     if  inputOne != rock && inputOne != paper && inputOne != scissor || inputTwo != rock && inputTwo != paper && inputTwo != scissor
#         p "Enter rock, paper, or scissor"
#         user_input()
#     else
#         run_or_not(inputOne, inputTwo)
#     end
# end
#
# def run_or_not(input1, input2)
#     rock = "rock"
#     paper = "paper"
#     scissor = "scissor"
#         if input1 == rock
#             if input2 == rock
#                 p "Draw"
#             elsif input2 == paper
#                 p "Player 2 Wins"
#             elsif input2 == scissor
#                 p "Player 1 Wins"
#             end
#         elsif input1 == paper
#             if input2 == rock
#                 p "Player 1 Wins"
#             elsif input2 == paper
#                 p "Draw"
#             elsif input2 == scissor
#                 p "Player 2 Wins"
#             end
#         elsif input1 == scissor
#             if input2 == rock
#                 p "Player 2 Wins"
#             elsif input2 == paper
#                 p "Player 1 Wins"
#             elsif input2 == scissor
#                 p "Draw"
#             end
#         end
#          user_input() #<- play game again
# end
# user_input() #<- starts the game the first time

##########################################################################


class X
    def initialize()
        @count = 1
    end
    def get_info ()
        p "Enter Username"
        userName = gets.chomp
        p "Enter Password"
        passWord = gets.chomp
        login(userName, passWord)
    end
    def login (uName, pWord)
        blank = []
        symbol = ["!","#","&","?","$"," "]
        numarr = ["1","2","3","4","5","6","7","8","9","0"]
        unarr = uName.split("")
        pwordarr = pWord.split("")
        blank << uName << pWord
        symbol_finder = pwordarr.map { |e| symbol.include? e }.include? true
        num_finder = pwordarr.map { |e| numarr.include? e }.include? true
        symbol_finder2 = unarr.map { |e| symbol.include? e }.include? true
        if @count == 3
            p "Try Again Later You Are Locked Out"
        elsif blank[0] == blank[1]
            p "username and password cannot be the same"
            p "TRY AGAIN?"
            @count = @count + 1
            get_info()
        elsif pWord.downcase.include? "password"
            p "Your Password Cannot Be Password"
            p "TRY AGAIN?"
            @count = @count + 1
            get_info()
        elsif symbol_finder == false || num_finder == false
            p "Your Password Needs a Symbol and a Number"
            p "TRY AGAIN?"
            @count = @count + 1
            get_info()
        elsif symbol_finder2 == true
            p "Username cannot Have spaces or symbols"
            p "TRY AGAIN?"
            @count = @count + 1
            get_info()
        else
            p "Welcome #{uName}, You are now Loged In "

        end
    end
end
x = X.new()

x.get_info()
# login("travis","travis")
# login("travis","Password")
# login("travis","Password22")
# login("travis","Passw2ord")
# login("travis","hello")
# login("travis?","hello?")
# login("travis","hello?12345")
