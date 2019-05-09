# p 2 + 2
# p 3 - 2
# p 3 * 2
# p 3 / 2
# p 3 / 2.0
# p 0/0
# p 4/0

################################################################

# my_favorite_number = 7
# my_favorite_number = my_favorite_number * 26
# someones_favorite = 13
# p my_favorite_number - someones_favorite
# p someones_favorite
# someones_favorite = 7
# p someones_favorite
# p my_favorite_number/2


################################################################

# my_string = "hello world"
# p my_string.upcase
# p my_string.reverse
# p my_string.include? "h"
# p my_string.capitalize

################################################################

# movie_array = ["titanic", "civil war", "jurrasic park", "jaws","AI","lost world", "jaws 2", "sonic","iRobot", 7]
# favs = Array.new
# favs2 = ["jaws 3"].join(', ')
# def tops(arr, arr2, arr3)
#      arr3 << " #{arr}, #{arr2[0]}, #{arr2[1]}, and #{arr2[2]} are my favorite movies"
#
# end
# def movie_length(arr)
#     p arr.length
# end
# def rev (arr)
#     p arr.reverse
# end
# def fetcher (arr, num)
#     p arr.fetch(num)
# end
# def arr_changer (arr,num)
#      arr[num] = "NEW MOVIE ITS THE BEST"
#      p arr
# end
# def arr_slicer(arr,arr2,num)
#     3.times do
#         arr2 << arr[num]
#         num = num + 1
#     end
#     p arr2
# end

# p movie_array
num = [1,2,3,4,5,6,7,8]
blank = []
def say_it_again (arr, arr2)
    rev_array = arr.reverse
    index = rev_array.length - 1
    rev_array.length.times do
        arr2 << rev_array[index]
        index = index - 1
    end
    p arr2
end

say_it_again(num, blank)
# movie_length(movie_array)
# movie_length(favs)
# p tops(favs2, movie_array, favs)
# rev(movie_array)
# fetcher(movie_array, 6)
# arr_changer(movie_array,3)
 # arr_slicer(movie_array,favs, 5)

################################################################

# blank = []
# x = 0
# array2 = [1,2]
# y = 1
#
# def array_buider(arr, num)
#     5.times do
#         num = num + 1
#          p arr << num
#      end
# end
# p array_buider(blank, x)
# p array_buider(array2, y)

 ################################################################

# blank = Array.new
# array2 = Array.new(5, 0)
#
#  def array_buider(arr)
#      5.times do
#           p arr << arr.length * 2
#       end
#  end

# array_buider(blank)
# array_buider(array2)

################################################################
