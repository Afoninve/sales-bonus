/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
   // @TODO: Расчет выручки от операции
   const { discount, sale_price, quantity } = purchase;
   const discount = 1 - (purchase.discount / 100);
   return revenue = sale_price * quantity * discount;
}

/**
 * Функция для расчета бонусов
 * @param index порядковый номер в отсортированном массиве
 * @param total общее число продавцов
 * @param seller карточка продавца
 * @returns {number}
 */
function calculateBonusByProfit(index, total, seller) {
    // @TODO: Расчет бонуса от позиции в рейтинге
    const { profit } = seller;
}

/**
 * Функция для анализа данных продаж
 * @param data
 * @param options
 * @returns {{revenue, top_products, bonus, name, sales_count, profit, seller_id}[]}
 */
function analyzeSalesData(data, options) {
    // @TODO: Проверка входных данных
    const { calculateRevenue, calculateBonus } = options;

    if (typeof options !== "object" || options === undefined) {
        throw new Error('Некорректные входные данные или они неопределенны')
    }
    // @TODO: Проверка наличия опций
        if (!data
        || !Array.isArray(data.sellers)
        || data.sellers.length === 0
    ) {
        throw new Error('Некорректные входные данные');
    } 

    if (!calculateRevenue || !calculateBonus) {
        throw new Error('Чего-то не хватает');
    }

    // @TODO: Подготовка промежуточных данных для сбора статистики
    const sellerStats = data.sellers.map(seller => ({
        id: seller.id,
        name: `${seller.first_name} ${seller.last_name}`,
        revenue: 0,
        profit: 0,
        sales_count: 0,
    products_sold: {}
    }));

    // @TODO: Индексация продавцов и товаров для быстрого доступа
    const sellerIndex = sellerStats.reduce((result, item) => ({
        ...result,
        [item.seller]: seller.id
    }), {});
    
    const productIndex = data.products.reduce((result, item) => ({
        ...result,
        [item.sku]: data.products.sku
    }), {});

    data.purchase_records.forEach(record => {
        const seller = sellerIndex[record.seller_id];
        sales_count++;
        revenue += total_amount;

        sellerStats.sort();

        // Расчёт прибыли для каждого товара
        record.items.forEach(item => {
            const product = productIndex[item.sku]; // Товар
            cost = product.purchase_price * purchase_records.quantity
            // Посчитать выручку (revenue) с учётом скидки через функцию calculateRevenue
            // Посчитать прибыль: выручка минус себестоимость
        // Увеличить общую накопленную прибыль (profit) у продавца  

            // Учёт количества проданных товаров
            if (!seller.products_sold[item.sku]) {
                seller.products_sold[item.sku] = 0;
            }
            // По артикулу товара увеличить его проданное количество у продавца
        });
 }); 
    // @TODO: Расчет выручки и прибыли для каждого продавца

    // @TODO: Сортировка продавцов по прибыли

    // @TODO: Назначение премий на основе ранжирования

    // @TODO: Подготовка итоговой коллекции с нужными полями

}