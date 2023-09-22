package com.citi.collaborative.dao.impl;

import com.citi.collaborative.common.Ops;
import com.citi.collaborative.dao.DynamoDbService;
import com.citi.collaborative.dao.IBaseDao;
import com.citi.collaborative.domain.CommonDomain;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public class CommonBaseDao<E extends CommonDomain> implements IBaseDao<E> {

    private final DynamoDbService<E> dynamoDbService = new DynamoDbService<E>();

    @Override
    public boolean save(E... objs) {
        for (E obj : objs) {
            dynamoDbService.putRecord(obj);
        }
        return true;
    }

    @Override
    public boolean update(E... objs) {
        for (E e : objs) {
            Ops<E> ops = Ops.<E>builder()
                    .data(e)
                    .name(e.getName())
                    .build();
            dynamoDbService.update(ops);
        }
        return true;
    }

    @Override
    public Collection<E> list(Ops<E> ops, Class<E> type) {
        return dynamoDbService.list(ops, type);
    }

    @Override
    public Collection<E> findAll(Class<E> type) {
        return dynamoDbService.findAll(type);
    }


}
