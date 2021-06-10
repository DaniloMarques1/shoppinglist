package com.shoppinglist.model

import java.math.BigDecimal

data class Item(
        val name: String,
        val price: BigDecimal,
        val qtd: Int
)