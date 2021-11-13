## Jetpack Compose

A resume of all I learned about Jetpack Compose from [Mitch](https://www.youtube.com/watch?v=zqHPE7Tib-c&list=PLgCYzUzKIBE_I0_tU5TvkfQpnmrP_9XV8&index=1)

## Composable building blocks

### Row

A row is used to structure it's children horizontally

```kotlin
Row() {
	// ... children here
}
```

### Column

A column is used to structure it's children vertically

```kotlin
Column() {
	// ... children here
}
```

### Spacer

A spacer is a transparent view that works a separator between the views

```kotlin
Spacer(modifier = Modifier.width(8.dp))
```

## Modifiers

### Circular rounded corners modifier

```kotlin
Image(painter = painterResource(id = R.drawable.burger),
	contentDescription = "Burger",
	modifier = Modifier.clip(CircleShape))
```

### Normal rounded corners modifier

```kotlin
Image(painter = painterResource(id = R.drawable.burger),
	contentDescription = "Burger",
	modifier = Modifier.clip(RoundedCornerShape(8.dp)))
```

```kotlin

```
