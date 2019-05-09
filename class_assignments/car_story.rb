class Listeners_and_Funcs
    def to_s()
        "Make: #{@model}, Wheel Count: #{@wheels}, Year: #{@year}, Lights: #{@lights}, Turn Signal Status:#{@signal}, Speed: #{@speed} km/h"
    end

    def my_vehicle()
        @model
    end

    def wheel_num()
        @wheels
    end

    def year_num()
        @year
    end

    def lights_status()
        @lights
    end

    def signal_status()
        @signal
    end

    def speed_status()
        @speed
    end

    def my_vehicle_s()
        "Make: #{@model}"
    end

    def wheel_num_s()
        "Wheel Count: #{@wheels}"
    end

    def year_num_s()
        "Year: #{@year}"
    end

    def lights_status_s()
        "Lights: #{@lights}"
    end

    def signal_status_s()
        "Turn Signal Status:#{@signal}"
    end

    def speed_status_s()
        "Speed: #{@speed} km/h"
    end


    def signal_right()
        if @signal ==  "Right"
            @signal = "Off"
        else
            @signal = "Right"
        end
    end

    def signal_left()
        if @signal ==  "Left"
            @signal = "Off"
        else
            @signal = "Left"
        end
    end

    def light_toggle()
        if @lights == "Off"
            @lights = "On"
        else
            @lights = "Off"
        end
    end

    def accelerate(speed)
        @speed = speed + @speed
        if @speed < 0
            @speed = 0
        end
    end

    def break(speed)
        @speed = @speed - speed
        if @speed < 0
            @speed = 0
        end
    end
end

class Vehicle < Listeners_and_Funcs
    def initialize (model, wheels, year)
        @model = model
        @wheels = wheels
        @year = year
        @lights = "Off"
        @signal = "Off"
        @speed = 0
    end
end

class Car < Vehicle
    def initialize (model, wheels = 4  , year = 2000 )
        super(model, wheels, year)
            @model = model
            @year = year
            @wheels = 4
    end
end

class MotorCycle < Vehicle
    def initialize (model, wheels = 2, year = 2000)
        super(model, wheels, year)
            @model = model
            @year = year
    end
end

class Tesla < Car
    def initialize ()
        super ()
            @model = "Tesla"
            @year = 2019
    end
end

class Tesla2 < Car
    def initialize ()
        super ()
            @model = "Tesla"
            @year = 2017
    end
end

class Honda < Car
    def initialize ()
        super ()
        @model = "Honda"
        @year = 1992
    end
end

class Honda2 < Car
    def initialize ()
        super ()
        @model = "Honda"
        @year = 2018
    end
end

class Toyota < Car
    def initialize ()
        super ()
        @model = "Toyota"
        @year = 2010
    end
end

class Toyota2 < Car
    def initialize ()
        super ()
        @model = "Toyota"
        @year = 1942
    end
end

class Yamaha < MotorCycle
    def initialize ()
        super ()
        @model = "Yahmaha"
        @year = 1980
    end
end

class Garage
    def yoc(arr)
        arr.map { |e| e.year_num()}.sort
    end

    def moc(arr)
        arr.map { |e| e.my_vehicle()}.sort
    end

    def yam(arr)
        blank = []
        index = 0
        newarr = arr.map { |e| e.my_vehicle()}
        newarr2 = arr.map { |e| e.year_num()}
        arr.length.times do
            blank << newarr[index]
            blank << newarr2[index]
            index = index + 1
        end
        blank
    end
end

my_toyota = Toyota.new()
my_toyota2 = Toyota2.new()
my_tesla = Tesla.new()
my_tesla2 = Tesla2.new()
my_Honda = Honda.new()
my_Honda2 = Honda2.new()

my_garage = [my_toyota, my_toyota2,my_tesla,my_tesla2,my_Honda,my_Honda2]
newGarage = Garage.new()

p newGarage.yoc(my_garage)
p newGarage.moc(my_garage)
p newGarage.yam(my_garage)




######

# example1 = [ 1,2,3,4,5]
# example2 = ["yellow", "blue", "green", "purple", "red"]
#
# p

# p yoc(my_garage), moc(my_garage)
# my_yamaha = Yamaha.new()
# p my_yamaha
# p my_yamaha.wheel_num()
# toyota = Vehicle.new("toyota")
# p toyota
# p toyota.my_vehicle


# tesla = Car.new(@model)
# p tesla
# p tesla.wheel_num
#
# hodna = Honda.new()
# p hodna.to_s



# hodna.accelerate(100)
# p hodna
# hodna.break(150)
# p hodna
# tesla = Tesla.new()
# p tesla
# tesla.accelerate(10)
# p tesla
# tesla.break(4)
# p tesla
# tesla.signal_right()
# tesla.light_toggle()
# tesla.light_toggle()
# tesla.signal_right()
# p tesla
