# BAC calculator

Don't drink and drive accidentally

# The math (unimplemented)

The standard formula

```
BAC = A/(r × Wₜ) - β × T
```

`A` is the mass of alcohol consumed  
`r` is the ratio of body water to total weight  
`Wₜ` is body weight  
`β` is the rate at which alcohol is metabolized  
`T` is the amount of time during which alcohol was present in the blood

## Getting each variable

- User input  
  `A` the mass of alcohol consumed  
  `Wₜ` body weight  
  `Hₜ` body height  
  `age` age  
  `T` the amount of time during which alcohol was present in the blood  
  this formula takes only one batch of alcohol, adding additional is explained below

- Aditional calculation  
  **`r` ratio of body water to total weight**  
  Using the watson formula to calculate **T**otal **B**ody **W**ater in Liters:

      	TBW(Male) = 2.447 - 0.09156 × age + 0.1074 × Hₜ + 0.3362 × Wₜ
      	TBW(Female) = -2.097 + 0.1069 × Hₜ + 0.2466 × Wₜ

  And then getting the ratio with

      	r = Wₜ / TBW

- Assumption  
  `β` the rate at which alcohol is metabolized is assumed a bit lower at `0.015`

## Adding aditional drinks (unimplemented)

The times of each drink will be recorded and added on top of the previous drink. At the time of adding a new drink, the `BAC` will be calculated and from that, the existing mass of alcohol `Aₑ` will be extracted:

    Aₑ = (BAC + β × T) × (r × Wₜ)

with `T = 0`, because the time is now

    Aₑ = BAC × (r × Wₜ)

adding the initial `BAC` formula

    Aₑ = A - β × T × r × Wₜ

So when a new drink will be added, with it, the existing alcohol `Aₑ` will be added as well.

# Assessing donger (unimplemented)

Optionally, the app can warn you if you drink too much

As in the United States, a standard drink contains 14.0 grams of alcohol, it is adjusted for non

- **Binge drinking**, the most common form of excessive drinking, is defined as consuming

  For women, 4 or more drinks during a single occasion. (56 grams)  
   For men, 5 or more drinks during a single occasion. (70 grams)  


- **Heavy** drinking is defined as consuming  
   For women, 8 or more drinks per week. (112 grams)  
   For men, 15 or more drinks per week. (210 grams)

# Icons

Drink icon made by [freepik](https://www.freepik.com)
