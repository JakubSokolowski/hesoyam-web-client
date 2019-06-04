import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';

import { FEATURE_NAME, reducers } from './examples.state';
import { SentimentAnalysisRoutingModule } from './sentiment-analysis-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { TodosEffects } from './todos/todos.effects';
import { StockMarketContainerComponent } from './stock-market/components/stock-market-container/stock-market-container.component';
import { AssetPriceChartComponent } from '@app/sentiment-analysis/asset-price-chart/asset-price-chart.component';
import { AssetInsightContainerComponent } from '@app/sentiment-analysis/asset-insights/components/asset-insight-container/asset-insight-container.component';
import { StockMarketEffects } from './stock-market/stock-market.effects';
import { StockMarketService } from './stock-market/stock-market.service';
import { BittrexService } from '@app/sentiment-analysis/asset-price-chart/bittrex.service';
import { ParentComponent } from './theming/parent/parent.component';
import { ChildComponent } from './theming/child/child.component';
import { CrudComponent } from './crud/components/crud.component';
import { BooksEffects } from './crud/books.effects';
import { FormComponent } from './form/components/form.component';
import { FormEffects } from './form/form.effects';
import { DataScrapperComponent } from './authenticated/data-scrapper.component';
import { NotificationsComponent } from './notifications/components/notifications.component';
import { ExamplesEffects } from './examples.effects';
import { ChartsModule } from 'ng2-charts';
import {AssetNewsTableComponent} from '@app/sentiment-analysis/asset-news-table/asset-news-table.component';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import {MatTableModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';

@NgModule({
    imports: [
        SharedModule,
        SentimentAnalysisRoutingModule,
        StoreModule.forFeature(FEATURE_NAME, reducers),
        ChartsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDatepickerModule,
        MatSelectModule,

        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            isolate: true
        }),
        EffectsModule.forFeature([
            ExamplesEffects,
            TodosEffects,
            StockMarketEffects,
            BooksEffects,
            FormEffects
        ])
    ],
    declarations: [
        ExamplesComponent,
        TodosContainerComponent,
        StockMarketContainerComponent,
        AssetPriceChartComponent,
        AssetInsightContainerComponent,
        AssetNewsTableComponent,
        ParentComponent,
        ChildComponent,
        DataScrapperComponent,
        CrudComponent,
        FormComponent,
        NotificationsComponent
    ],
    providers: [StockMarketService, BittrexService]
})
export class SentimentAnalysisModule {
    constructor() {}
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(
        http,
        `${environment.i18nPrefix}/assets/i18n/examples/`,
        '.json'
    );
}
